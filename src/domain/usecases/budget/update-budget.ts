export interface UpdateBudget {
    update: (params: UpdateBudget.Params) => Promise<UpdateBudget.Result>
}

export namespace UpdateBudget {
    export type Params = {
        id: number
        budgetValue?: number
        categoryId?: number
    }

    export type Result = number
}