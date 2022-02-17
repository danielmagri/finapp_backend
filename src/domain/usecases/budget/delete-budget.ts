export interface DeleteBudget {
    delete: (params: DeleteBudget.Params) => Promise<DeleteBudget.Result>
}

export namespace DeleteBudget {
    export type Params = {
        month: number
        year: number
    }

    export type Result = number
}