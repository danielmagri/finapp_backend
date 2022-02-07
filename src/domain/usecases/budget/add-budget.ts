import { Budget } from '@/domain/models'

export interface AddBudget {
    add: (params: AddBudget.Params) => Promise<AddBudget.Result>
}

export namespace AddBudget {
    export type Params = {
        budgetValue: number
        month: number
        year: number
        categoryId: number
    }

    export type Result = Budget.Model
}