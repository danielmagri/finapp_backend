import { UpdateTransaction } from '@/domain/usecases'
import { UpdateTransactionRepository } from '@/data/protocols'

export class UpdateTransactionImpl implements UpdateTransaction {
    constructor(
        private readonly updateTransactionRepository: UpdateTransactionRepository
    ) { }

    async update(params: UpdateTransaction.Params): Promise<UpdateTransaction.Result> {
        const input = { ...params, updatedAt: new Date() }

        return await this.updateTransactionRepository.updateTransaction(input)
    }

}