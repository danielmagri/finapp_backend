import { DeleteBudget } from '@/domain/usecases'
import { DeleteBudgetImpl } from '@/data/usecases'
import { makeBudgetDbRepository } from '@/main/factories/infras'


export const makeDeleteBudget = (): DeleteBudget => {
  const transactionDbRepository = makeBudgetDbRepository()
    return new DeleteBudgetImpl(transactionDbRepository)
}