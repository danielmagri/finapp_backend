import { Budget } from '@/domain/models'

export interface FindBudgets {
    find: () => Promise<FindBudgets.Result>
}

export namespace FindBudgets {
    export type Result = Budget.Model[]
}