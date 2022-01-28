import { DatabaseError } from '@/data/errors';
import { AddTransactionRepository, FindTransactionsRepository } from '@/data/protocols/repositories';
import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { TransactionEntity } from '@/infra/database/entities';


export class TransactionDbRepository implements AddTransactionRepository, FindTransactionsRepository {
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

    async findTransaction(): Promise<FindTransactionsRepository.Result> {
        try {
            const repo = this.database.getRepository(TransactionEntity)
            const result = await repo.find()

            return result
        } catch (error) {
            throw new DatabaseError.InsertFail(String(error.stack))
        }
    }

}