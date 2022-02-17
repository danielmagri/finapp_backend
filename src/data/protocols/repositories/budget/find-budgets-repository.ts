import { FindBudgets } from '@/domain/usecases'

export interface FindBudgetsRepository {
  findBudget: (params: FindBudgetsRepository.Params) => Promise<FindBudgetsRepository.Result>
}

export namespace FindBudgetsRepository {
  export type Params = FindBudgets.Params

  export type Result = FindBudgets.Result
}
