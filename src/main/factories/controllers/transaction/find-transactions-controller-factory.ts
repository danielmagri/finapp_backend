import { Http } from '@/presentation/protocols'
import { FindTransactionsController } from '@/presentation/controllers'
import { makeFindTransactions } from '@/main/factories/usecases'

export const makeFindTransactionsController = (): Http.Controller => {
    const findTransactions = makeFindTransactions()
    const controller = new FindTransactionsController(findTransactions)
    return controller
}