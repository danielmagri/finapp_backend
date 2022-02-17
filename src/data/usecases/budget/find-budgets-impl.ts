import { FindBudgets } from '@/domain/usecases'
import { FindBudgetsRepository } from '@/data/protocols'

export class FindBudgetsImpl implements FindBudgets {
    constructor(
        private readonly findBudgetsRepository: FindBudgetsRepository
    ) { }

    async find(params: FindBudgets.Params): Promise<FindBudgets.Result> {
        return await this.findBudgetsRepository.findBudget(params)
    }

}