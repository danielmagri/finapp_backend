export interface DeleteTransaction {
    delete: (params: DeleteTransaction.Params) => Promise<DeleteTransaction.Result>
}

export namespace DeleteTransaction {
    export type Params = {
        id: number
    }

    export type Result = number | null
}