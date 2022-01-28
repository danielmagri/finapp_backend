import { FindTransactions } from '@/domain/usecases'
import { FindTransactionsRepository } from '@/data/protocols'

export class FindTransactionsImpl implements FindTransactions {
    constructor(
        private readonly findTransactionsRepository: FindTransactionsRepository
    ) { }

    async find(): Promise<FindTransactions.Result> {
        return await this.findTransactionsRepository.findTransaction()
    }

}