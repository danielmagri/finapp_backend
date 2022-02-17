import { AddTransaction } from '@/domain/usecases'
import { AddTransactionRepository } from '@/data/protocols'

export class AddTransactionImpl implements AddTransaction {
    constructor(
        private readonly addTransactionRepository: AddTransactionRepository
    ) { }

    async add(params: AddTransaction.Params): Promise<AddTransaction.Result> {
        const category = { id: params.categoryId }
        const input = { ...params, category: category }
        delete input.categoryId

        return await this.addTransactionRepository.addTransaction(input)
    }

}