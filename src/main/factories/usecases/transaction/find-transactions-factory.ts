import { FindTransactions } from '@/domain/usecases'
import { FindTransactionsImpl } from '@/data/usecases'
import { makeTransactionDbRepository } from '@/main/factories/infras'


export const makeFindTransactions = (): FindTransactions => {
  const transactionDbRepository = makeTransactionDbRepository()
    return new FindTransactionsImpl(transactionDbRepository)
}