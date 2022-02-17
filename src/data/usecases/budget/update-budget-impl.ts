import { UpdateBudget } from '@/domain/usecases'
import { UpdateBudgetRepository } from '@/data/protocols'

export class UpdateBudgetImpl implements UpdateBudget {
    constructor(
        private readonly updateBudgetRepository: UpdateBudgetRepository
    ) { }

    async update(params: UpdateBudget.Params): Promise<UpdateBudget.Result> {
        const category = params.categoryId !== undefined ? { id: params.categoryId } : undefined
        delete params.categoryId
        const input = { ...params, category: category }

        return await this.updateBudgetRepository.updateBudget(input)
    }

}