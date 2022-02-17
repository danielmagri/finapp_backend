import { DatabaseError } from '@/data/errors';
import { AddBudgetRepository, DeleteBudgetRepository, FindBudgetsRepository, UpdateBudgetRepository } from '@/data/protocols';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import * as entities from '@/infra/database/entities';

export class BudgetDbRepository implements AddBudgetRepository, FindBudgetsRepository, UpdateBudgetRepository, DeleteBudgetRepository {
    constructor(
        private readonly database: MySqlDatasource
    ) { }

    async addBudget(params: AddBudgetRepository.Params): Promise<AddBudgetRepository.Result> {
        try {
            const repo = this.database.getRepository(entities.BudgetEntity)
            const result = await repo.insert(params)

            return { ...result.generatedMaps[0]['id'], ...params }
        } catch (error) {
            throw new DatabaseError.InsertFail(String(error.stack))
        }
    }

    async findBudget(params: FindBudgetsRepository.Params): Promise<FindBudgetsRepository.Result> {
        try {
            const repo = this.database.getRepository(entities.BudgetEntity)

            const result = await repo.query(`SELECT
            date, budgetValue, spentValue,
                sum(budgetValue + spentValue) OVER (PARTITION BY categoryId 
                                     ORDER BY date 
                                         ROWS 2 PRECEDING) AS remainingValue
            FROM budgets 
            ORDER BY date;`)

            return result
        } catch (error) {
            throw new DatabaseError.NotFound(String(error.stack))
        }
    }

    async updateBudget(params: UpdateBudgetRepository.Params): Promise<UpdateBudgetRepository.Result> {
        try {
            const repo = this.database.getRepository(entities.BudgetEntity)

            Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

            const result = await repo.update(params.id, params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.UpdateFail(String(error.stack))
        }
    }

    async deleteBudget(params: DeleteBudgetRepository.Params): Promise<DeleteBudgetRepository.Result> {
        try {
            const repo = this.database.getRepository(entities.BudgetEntity)
            const result = await repo.delete(params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.RemoveFail(String(error.stack))
        }
    }
}