import { AddTransaction } from '@/domain/usecases'
import { AddTransactionRepository } from '@/data/protocols'

export class AddTransactionImpl implements AddTransaction {
    constructor(
        private readonly addTransactionRepository: AddTransactionRepository
    ) { }

    async add(params: AddTransaction.Params): Promise<AddTransaction.Result> {
        const input = { ...params, createdAt: new Date(), updatedAt: new Date() }

        return await this.addTransactionRepository.addTransaction(input)
    }

}