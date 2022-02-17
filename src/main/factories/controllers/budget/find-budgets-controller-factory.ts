import { Http } from '@/presentation/protocols'
import { FindBudgetsController } from '@/presentation/controllers'
import { makeFindBudgets } from '@/main/factories/usecases'
import { makeFindBudgetsValidation } from '@/main/factories/validations'

export const makeFindBudgetsController = (): Http.Controller => {
    const validation = makeFindBudgetsValidation()
    const findBudgets = makeFindBudgets()
    const controller = new FindBudgetsController(validation, findBudgets)
    return controller
}