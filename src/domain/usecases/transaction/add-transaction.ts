import { Transaction } from '@/domain/models'

export interface AddTransaction {
    add: (params: AddTransaction.Params) => Promise<AddTransaction.Result>
}

export namespace AddTransaction {
    export type Params = {
        value: number
        type: Transaction.TransactionType
        date: Date
    }

    export type Result = Transaction.Model
}