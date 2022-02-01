export interface UpdateTransaction {
    update: (params: UpdateTransaction.Params) => Promise<UpdateTransaction.Result>
}

export namespace UpdateTransaction {
    export type Params = {
        id: number
        value?: number
        type?: number
        date?: Date
    }

    export type Result = number
}