import { AddBudget } from '@/domain/usecases'

export interface AddBudgetRepository {
    addBudget: (params: AddBudgetRepository.Params) => Promise<AddBudgetRepository.Result>
}

export namespace AddBudgetRepository {
    export type Params = {
        budgetValue: number
        month: number
        year: number
        categoryId: number
        createdAt: Date
        updatedAt: Date
    }
    export type Result = AddBudget.Result
}
