export namespace Transaction {
    export interface Model {
        id: number
        value: number
        type: TransactionType
        date: Date
        createdAt: Date
        updatedAt: Date
    }

    export enum TransactionType {
        Income = 0,
        Expense = 1,
      }
}
