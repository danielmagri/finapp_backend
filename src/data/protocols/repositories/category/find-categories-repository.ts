import { FindCategories } from '@/domain/usecases'

export interface FindCategoriesRepository {
  findCategory: () => Promise<FindCategoriesRepository.Result>
}

export namespace FindCategoriesRepository {
  export type Result = FindCategories.Result
}
