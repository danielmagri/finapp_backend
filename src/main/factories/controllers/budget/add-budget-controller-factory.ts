import { Http } from '@/presentation/protocols'
import { AddBudgetController } from '@/presentation/controllers'
import { makeAddBudget } from '@/main/factories/usecases'
import { makeAddBudgetValidation } from '@/main/factories/validations'

export const makeAddBudgetController = (): Http.Controller => {
    const validation = makeAddBudgetValidation()
    const addBudget = makeAddBudget()
    const controller = new AddBudgetController(validation, addBudget)
    return controller
}