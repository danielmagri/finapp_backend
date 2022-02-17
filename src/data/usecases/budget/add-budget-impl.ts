import { AddBudget } from '@/domain/usecases'
import { AddBudgetRepository } from '@/data/protocols'

export class AddBudgetImpl implements AddBudget {
    constructor(
        private readonly addBudgetRepository: AddBudgetRepository
    ) { }

    async add(params: AddBudget.Params): Promise<AddBudget.Result> {
        const category = { id: params.categoryId }
        const input = { ...params, category: category }
        delete input.categoryId

        return await this.addBudgetRepository.addBudget(input)
    }

}