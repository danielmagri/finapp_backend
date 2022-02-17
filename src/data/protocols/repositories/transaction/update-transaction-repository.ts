import { UpdateTransaction } from '@/domain/usecases'

export interface UpdateTransactionRepository {
    updateTransaction: (params: UpdateTransactionRepository.Params) => Promise<UpdateTransactionRepository.Result>
}

export namespace UpdateTransactionRepository {
    export type Params = {
        id: number
        value?: number
        type?: number
        date?: Date
        category: { id: number }
    }
    export type Result = UpdateTransaction.Result
}
