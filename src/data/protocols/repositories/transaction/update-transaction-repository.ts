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
        categoryId?: number
        updatedAt: Date
    }
    export type Result = UpdateTransaction.Result
}
