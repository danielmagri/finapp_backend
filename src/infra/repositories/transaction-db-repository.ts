import { DatabaseError } from '@/data/errors';
import { AddTransactionRepository, DeleteTransactionRepository, FindTransactionsRepository, UpdateTransactionRepository } from '@/data/protocols/repositories';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { TransactionEntity } from '@/infra/database/entities';


export class TransactionDbRepository implements AddTransactionRepository, FindTransactionsRepository, UpdateTransactionRepository, DeleteTransactionRepository {
    constructor(
        private readonly database: MySqlDatasource
    ) { }

    async addTransaction(params: AddTransactionRepository.Params): Promise<AddTransactionRepository.Result> {
        try {
            const repo = this.database.getRepository(TransactionEntity)
            const result = await repo.insert(params)

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
            const repo = this.database.getRepository(TransactionEntity)

            Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

            const result = await repo.update(params.id, params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.UpdateFail(String(error.stack))
        }
    }

    async deleteTransaction(params: DeleteTransactionRepository.Params): Promise<DeleteTransactionRepository.Result> {
        try {
            const repo = this.database.getRepository(TransactionEntity)
            const result = await repo.delete(params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.RemoveFail(String(error.stack))
        }
    }

}