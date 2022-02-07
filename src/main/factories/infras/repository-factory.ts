import { MySqlDatasource } from '@/infra/database/datasources/mysql-datasource';
import { TransactionDbRepository, CategoryDbRepository, BudgetDbRepository } from '@/infra/repositories';


export const makeTransactionDbRepository = (): TransactionDbRepository => {
    const datasource = new MySqlDatasource()
    return new TransactionDbRepository(datasource)
}

export const makeCategoryDbRepository = (): CategoryDbRepository => {
    const datasource = new MySqlDatasource()
    return new CategoryDbRepository(datasource)
}

export const makeBudgetDbRepository = (): BudgetDbRepository => {
    const datasource = new MySqlDatasource()
    return new BudgetDbRepository(datasource)
}