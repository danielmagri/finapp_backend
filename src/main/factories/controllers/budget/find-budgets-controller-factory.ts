import { Http } from '@/presentation/protocols'
import { FindBudgetsController } from '@/presentation/controllers'
import { makeFindBudgets } from '@/main/factories/usecases'

export const makeFindBudgetsController = (): Http.Controller => {
    const findBudgets = makeFindBudgets()
    const controller = new FindBudgetsController(findBudgets)
    return controller
}