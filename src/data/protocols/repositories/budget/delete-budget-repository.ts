
import { DeleteBudget } from '@/domain/usecases'

export interface DeleteBudgetRepository {
    deleteBudget: (params: DeleteBudgetRepository.Params) => Promise<DeleteBudgetRepository.Result>
}

export namespace DeleteBudgetRepository {
    export type Params = {
        date: Date
    }
    export type Result = DeleteBudget.Result
}
