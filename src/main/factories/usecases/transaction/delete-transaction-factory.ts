import { DeleteTransaction } from '@/domain/usecases'
import { DeleteTransactionImpl } from '@/data/usecases'
import { makeTransactionDbRepository } from '@/main/factories/infras'


export const makeDeleteTransaction = (): DeleteTransaction => {
  const transactionDbRepository = makeTransactionDbRepository()
    return new DeleteTransactionImpl(transactionDbRepository)
}