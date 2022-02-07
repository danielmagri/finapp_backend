import { Http } from '@/presentation/protocols'
import { DeleteBudgetController } from '@/presentation/controllers'
import { makeDeleteBudget } from '@/main/factories/usecases'

export const makeDeleteBudgetController = (): Http.Controller => {
    const DeleteBudget = makeDeleteBudget()
    const controller = new DeleteBudgetController(DeleteBudget)
    return controller
}