import { Http } from '@/presentation/protocols'
import { UpdateTransactionController } from '@/presentation/controllers'
import { makeUpdateTransaction } from '@/main/factories/usecases'
import { makeUpdateTransactionValidation } from '@/main/factories/validations'

export const makeUpdateTransactionController = (): Http.Controller => {
    const validation = makeUpdateTransactionValidation()
    const UpdateTransaction = makeUpdateTransaction()
    const controller = new UpdateTransactionController(validation, UpdateTransaction)
    return controller
}