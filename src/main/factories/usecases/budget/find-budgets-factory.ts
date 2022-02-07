import { FindBudgets } from '@/domain/usecases'
import { FindBudgetsImpl } from '@/data/usecases'
import { makeBudgetDbRepository } from '@/main/factories/infras'


export const makeFindBudgets = (): FindBudgets => {
  const transactionDbRepository = makeBudgetDbRepository()
  return new FindBudgetsImpl(transactionDbRepository)
}