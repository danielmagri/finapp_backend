import { Pagination, Transaction } from '@/domain/models'

export interface FindTransactions {
    find: (params: FindTransactions.Params) => Promise<FindTransactions.Result>
}

export namespace FindTransactions {
    export type Params = Pagination.Request

    export type Result = Pagination.Result<Transaction.Model>
}