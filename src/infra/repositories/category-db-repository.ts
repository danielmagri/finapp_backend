import { DatabaseError } from '@/data/errors';
import { AddCategoryRepository } from '@/data/protocols';
import { Category } from '@/domain/models';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { CategoryEntity } from '../database/entities';

export class CategoryDbRepository implements AddCategoryRepository { 
    constructor(
        private readonly database: MySqlDatasource
    ) { }

    async addCategory (params: AddCategoryRepository.Params): Promise<Category.Model> {
        try {
            const repo = this.database.getRepository(CategoryEntity)
            const result = await repo.insert(params)

            return { ...result.generatedMaps[0]['id'], ...params }
        } catch (error) {
            throw new DatabaseError.InsertFail(String(error.stack))
        }
    }

}