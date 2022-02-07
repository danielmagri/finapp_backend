
import { DeleteBudget } from '@/domain/usecases'

export interface DeleteBudgetRepository {
    deleteBudget: (params: DeleteBudgetRepository.Params) => Promise<DeleteBudgetRepository.Result>
}

export namespace DeleteBudgetRepository {
    export type Params = {
        id: number
    }
    export type Result = DeleteBudget.Result
}
