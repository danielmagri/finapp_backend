import { DeleteBudget } from '@/domain/usecases'
import { DeleteBudgetRepository } from '@/data/protocols'

export class DeleteBudgetImpl implements DeleteBudget {
    constructor(
        private readonly deleteBudgetRepository: DeleteBudgetRepository
    ) { }

    async delete(params: DeleteBudget.Params): Promise<DeleteBudget.Result> {
        return await this.deleteBudgetRepository.deleteBudget({ date: new Date(params.year, params.month, 1) })
    }

}