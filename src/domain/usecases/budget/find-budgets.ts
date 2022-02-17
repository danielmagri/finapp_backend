import { Budget } from '@/domain/models'

export interface FindBudgets {
    find: (params: FindBudgets.Params) => Promise<FindBudgets.Result>
}

export namespace FindBudgets {
    export type Params = {
        month: number
        year: number
    }

    export type Result = Budget.Model[]
}