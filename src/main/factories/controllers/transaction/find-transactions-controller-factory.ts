import { Http } from '@/presentation/protocols'
import { FindTransactionsController } from '@/presentation/controllers'
import { makeFindTransactions } from '@/main/factories/usecases'
import { makeFindTransactionsValidation } from '@/main/factories/validations'

export const makeFindTransactionsController = (): Http.Controller => {
    const validation = makeFindTransactionsValidation()
    const findTransactions = makeFindTransactions()
    const controller = new FindTransactionsController(validation, findTransactions)
    return controller
}