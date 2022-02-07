import { FindBudgets } from '@/domain/usecases'

export interface FindBudgetsRepository {
  findBudget: () => Promise<FindBudgetsRepository.Result>
}

export namespace FindBudgetsRepository {
  export type Result = FindBudgets.Result
}
