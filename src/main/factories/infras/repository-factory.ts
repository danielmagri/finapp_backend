import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { TransactionDbRepository } from '@/infra/repositories/transaction-db-repository';


export const makeTransactionDbRepository = (): TransactionDbRepository => {
    const datasource = new MySqlDatasource()
    return new TransactionDbRepository(datasource)
}