
import { UpdateBudget } from '@/domain/usecases'

export interface UpdateBudgetRepository {
    updateBudget: (params: UpdateBudgetRepository.Params) => Promise<UpdateBudgetRepository.Result>
}

export namespace UpdateBudgetRepository {
    export type Params = {
        id: number
        budgetValue?: number
        category: { id: number }
    }
    export type Result = UpdateBudget.Result
}
