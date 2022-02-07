import { UpdateTransaction } from '@/domain/usecases'
import { UpdateTransactionRepository } from '@/data/protocols'

export class UpdateTransactionImpl implements UpdateTransaction {
    constructor(
        private readonly updateTransactionRepository: UpdateTransactionRepository
    ) { }

    async update(params: UpdateTransaction.Params): Promise<UpdateTransaction.Result> {
        const category = params.categoryId !== undefined ? { id: params.categoryId } : undefined
        delete params.categoryId
        const input = { ...params, category: category, updatedAt: new Date() }

        return await this.updateTransactionRepository.updateTransaction(input)
    }

}