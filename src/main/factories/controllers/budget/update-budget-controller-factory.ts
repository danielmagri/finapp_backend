import { Http } from '@/presentation/protocols'
import { UpdateBudgetController } from '@/presentation/controllers'
import { makeUpdateBudget } from '@/main/factories/usecases'
import { makeUpdateBudgetValidation } from '@/main/factories/validations'

export const makeUpdateBudgetController = (): Http.Controller => {
    const validation = makeUpdateBudgetValidation()
    const UpdateBudget = makeUpdateBudget()
    const controller = new UpdateBudgetController(validation, UpdateBudget)
    return controller
}