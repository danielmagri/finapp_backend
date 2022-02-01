import { UpdateTransaction } from '@/domain/usecases'
import { UpdateTransactionImpl } from '@/data/usecases'
import { makeTransactionDbRepository } from '@/main/factories/infras'


export const makeUpdateTransaction = (): UpdateTransaction => {
    const transactionDbRepository = makeTransactionDbRepository()
    return new UpdateTransactionImpl(transactionDbRepository)
}