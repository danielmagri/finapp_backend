import { DatabaseError } from '@/data/errors';
import { AddTransactionRepository } from '@/data/protocols/repositories';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { TransactionEntity } from '@/infra/database/entities';


export class TransactionDbRepository implements AddTransactionRepository {
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

}