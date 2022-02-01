import { DeleteTransaction } from '@/domain/usecases'
import { DeleteTransactionRepository } from '@/data/protocols'

export class DeleteTransactionImpl implements DeleteTransaction {
    constructor(
        private readonly deleteTransactionRepository: DeleteTransactionRepository
    ) { }

    async delete(params: DeleteTransaction.Params): Promise<DeleteTransaction.Result> {
        return await this.deleteTransactionRepository.deleteTransaction(params)
    }

}