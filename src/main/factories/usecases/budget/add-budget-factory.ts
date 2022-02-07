import { AddBudget } from '@/domain/usecases'
import { AddBudgetImpl } from '@/data/usecases'
import { makeBudgetDbRepository } from '@/main/factories/infras'


export const makeAddBudget = (): AddBudget => {
    
  const transactionDbRepository = makeBudgetDbRepository()
    return new AddBudgetImpl(transactionDbRepository)
}