import { DatabaseError } from '@/data/errors';
import { AddCategoryRepository, DeleteCategoryRepository, FindCategoriesRepository, UpdateCategoryRepository } from '@/data/protocols';
import { Category } from '@/domain/models';
import { FindCategories } from '@/domain/usecases';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { CategoryEntity } from '../database/entities';

export class CategoryDbRepository implements AddCategoryRepository, FindCategoriesRepository, UpdateCategoryRepository, DeleteCategoryRepository {
    constructor(
        private readonly database: MySqlDatasource
    ) { }

    async addCategory(params: AddCategoryRepository.Params): Promise<Category.Model> {
        try {
            const repo = this.database.getRepository(CategoryEntity)
            const result = await repo.insert(params)

            return { ...result.generatedMaps[0]['id'], ...params }
        } catch (error) {
            throw new DatabaseError.InsertFail(String(error.stack))
        }
    }

    async findCategory(): Promise<FindCategories.Result> {
        try {
            const repo = this.database.getRepository(CategoryEntity)
            const result = await repo.find()

            return result
        } catch (error) {
            throw new DatabaseError.NotFound(String(error.stack))
        }
    }

    async updateCategory(params: UpdateCategoryRepository.Params): Promise<UpdateCategoryRepository.Result> {
        try {
            const repo = this.database.getRepository(CategoryEntity)

            Object.keys(params).forEach(key => params[key] === undefined && delete params[key])

            const result = await repo.update(params.id, params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.UpdateFail(String(error.stack))
        }
    }

    async deleteCategory(params: DeleteCategoryRepository.Params): Promise<DeleteCategoryRepository.Result> {
        try {
            const repo = this.database.getRepository(CategoryEntity)
            const result = await repo.delete(params)

            return result.affected
        } catch (error) {
            throw new DatabaseError.RemoveFail(String(error.stack))
        }
    }
}