import { Http } from '@/presentation/protocols'
import { DeleteTransactionController } from '@/presentation/controllers'
import { makeDeleteTransaction } from '@/main/factories/usecases'

export const makeDeleteTransactionController = (): Http.Controller => {
    const DeleteTransaction = makeDeleteTransaction()
    const controller = new DeleteTransactionController(DeleteTransaction)
    return controller
}