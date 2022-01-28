import { Transaction } from '@/domain/models'

export interface FindTransactions {
    find: () => Promise<FindTransactions.Result>
}

export namespace FindTransactions {
    export type Result = Transaction.Model[]
}