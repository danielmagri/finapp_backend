
import { DeleteTransaction } from '@/domain/usecases'

export interface DeleteTransactionRepository {
    deleteTransaction: (params: DeleteTransactionRepository.Params) => Promise<DeleteTransactionRepository.Result>
}

export namespace DeleteTransactionRepository {
    export type Params = {
        id: number
    }
    export type Result = DeleteTransaction.Result
}
