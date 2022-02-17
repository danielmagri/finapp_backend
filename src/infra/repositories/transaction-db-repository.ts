import { DatabaseError } from '@/data/errors';
import { AddTransactionRepository, DeleteTransactionRepository, FindTransactionsRepository, UpdateTransactionRepository } from '@/data/protocols/repositories';
import { Transaction } from '@/domain/models';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { BudgetEntity, TransactionEntity } from '@/infra/database/entities';


export class TransactionDbRepository implements AddTransactionRepository, FindTransactionsRepository, UpdateTransactionRepository, DeleteTransactionRepository {
    constructor(
        private readonly database: MySqlDatasource
    ) { }

    async addTransaction(params: AddTransactionRepository.Params): Promise<AddTransactionRepository.Result> {
        try {
            const result = await this.database.getTransaction(async manager => {
                const budgetRepo = manager.getRepository(BudgetEntity)
                const transactionRepo = manager.getRepository(TransactionEntity)

                const budget = { date: new Date(params.date.getFullYear(), params.date.getMonth()), category: params.category }
                const budgetFound = await budgetRepo.findOne(budget)

                const signedValue = params.type == Transaction.TransactionType.Expense ? params.value * -1 : params.value

                if (budgetFound === undefined) {
                    await budgetRepo.insert({ ...budget, spentValue: signedValue })
                } else {
                    await budgetRepo.save({ ...budget, spentValue: budgetFound.spentValue + signedValue })
                }

                return await transactionRepo.insert(params)
            })


            return { ...result.generatedMaps[0]['id'], ...params }
        } catch (error) {
            throw new DatabaseError.InsertFail(String(error.stack))
        }
    }

    async findTransaction(params: FindTransactionsRepository.Params): Promise<FindTransactionsRepository.Result> {
        try {
            const repo = this.database.getRepository(TransactionEntity)
            const [result, count] = await repo.findAndCount({ order: { date: 'ASC' }, take: params.per_page, skip: params.per_page * (params.page - 1) })

            return { page: params.page, per_page: params.per_page, last_page: Math.ceil(count / params.per_page), total_itens: count, data: result }
        } catch (error) {
            throw new DatabaseError.NotFound(String(error.stack))
        }
    }

    async updateTransaction(params: UpdateTransactionRepository.Params): Promise<UpdateTransactionRepository.Result> {
        try {
            Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

            const result = await this.database.getTransaction(async manager => {
                const budgetRepo = manager.getRepository(BudgetEntity)
                const transactionRepo = manager.getRepository(TransactionEntity)

                const data = await transactionRepo.findOneOrFail(params.id)

                // Remove data from budget
                const oldBudget = { date: new Date(data.date.getFullYear(), data.date.getMonth()), category: data.category }
                const oldBudgetFound = await budgetRepo.findOneOrFail(oldBudget)

                const oldSignedValue = data.type == Transaction.TransactionType.Expense ? data.value * -1 : data.value

                await budgetRepo.save({ ...oldBudget, spentValue: oldBudgetFound.spentValue - oldSignedValue })

                // Add data on budget
                const transactionDate = params.date ?? data.date;
                const transactionCategory = params.category ?? data.category;
                const transactionValue = params.value ?? data.value;
                const transactionType = params.type ?? data.type;

                const newBudget = { date: new Date(transactionDate.getFullYear(), transactionDate.getMonth()), category: transactionCategory }
                const newBudgetFound = await budgetRepo.findOne(newBudget)

                const newSignedValue = transactionType == Transaction.TransactionType.Expense ? transactionValue * -1 : transactionValue

                if (newBudgetFound === undefined) {
                    await budgetRepo.insert({ ...newBudget, spentValue: newSignedValue })
                } else {
                    await budgetRepo.save({ ...newBudget, spentValue: newBudgetFound.spentValue + newSignedValue })
                }

                return await transactionRepo.update(params.id, params)
            })

            return result.affected
        } catch (error) {
            throw new DatabaseError.UpdateFail(String(error.stack))
        }
    }

    async deleteTransaction(params: DeleteTransactionRepository.Params): Promise<DeleteTransactionRepository.Result> {
        try {
            const result = await this.database.getTransaction(async manager => {
                const budgetRepo = manager.getRepository(BudgetEntity)
                const transactionRepo = manager.getRepository(TransactionEntity)

                const data = await transactionRepo.findOneOrFail(params)

                const budget = { date: new Date(data.date.getFullYear(), data.date.getMonth()), category: data.category }
                const budgetFound = await budgetRepo.findOneOrFail(budget)

                const signedValue = data.type == Transaction.TransactionType.Expense ? data.value * -1 : data.value

                await budgetRepo.save({ ...budget, spentValue: budgetFound.spentValue - signedValue })

                return await transactionRepo.delete(params)
            })

            return result.affected
        } catch (error) {
            throw new DatabaseError.RemoveFail(String(error.stack))
        }
    }

}