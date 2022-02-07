import { DatabaseError } from '@/data/errors';
import { AddCategoryRepository, FindCategoriesRepository } from '@/data/protocols';
import { Category } from '@/domain/models';
import { FindCategories } from '@/domain/usecases';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { CategoryEntity } from '../database/entities';

export class CategoryDbRepository implements AddCategoryRepository, FindCategoriesRepository {
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
}