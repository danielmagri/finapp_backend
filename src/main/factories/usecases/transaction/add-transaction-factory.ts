import { AddTransaction } from '@/domain/usecases'
import { AddTransactionImpl } from '@/data/usecases'
import { makeTransactionDbRepository } from '@/main/factories/infras'


export const makeAddTransaction = (): AddTransaction => {
    
  const transactionDbRepository = makeTransactionDbRepository()
    return new AddTransactionImpl(transactionDbRepository)
}