export interface DeleteCategory {
    delete: (params: DeleteCategory.Params) => Promise<DeleteCategory.Result>
}

export namespace DeleteCategory {
    export type Params = {
        id: number
    }

    export type Result = number | null
}