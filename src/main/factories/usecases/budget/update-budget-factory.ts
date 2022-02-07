import { UpdateBudget } from '@/domain/usecases'
import { UpdateBudgetImpl } from '@/data/usecases'
import { makeBudgetDbRepository } from '@/main/factories/infras'


export const makeUpdateBudget = (): UpdateBudget => {
    const transactionDbRepository = makeBudgetDbRepository()
    return new UpdateBudgetImpl(transactionDbRepository)
}