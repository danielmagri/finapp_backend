import { Http } from '@/presentation/protocols'
import { AddTransactionController } from '@/presentation/controllers'
import { makeAddTransaction } from '@/main/factories/usecases'
import { makeAddTransactionValidation } from '@/main/factories/validations'

export const makeAddTransactionController = (): Http.Controller => {
    const validation = makeAddTransactionValidation()
    const addTransaction = makeAddTransaction()
    const controller = new AddTransactionController(validation, addTransaction)
    return controller
}