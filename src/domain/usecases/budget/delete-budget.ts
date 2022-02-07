export interface DeleteBudget {
    delete: (params: DeleteBudget.Params) => Promise<DeleteBudget.Result>
}

export namespace DeleteBudget {
    export type Params = {
        id: number
    }

    export type Result = number | null
}