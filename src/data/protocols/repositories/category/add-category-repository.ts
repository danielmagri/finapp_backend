import { AddCategory } from '@/domain/usecases'

export interface AddCategoryRepository {
    addCategory: (params: AddCategoryRepository.Params) => Promise<AddCategoryRepository.Result>
  }
  
  export namespace AddCategoryRepository {
    export type Params = {
      name: string
      createdAt: Date
      updatedAt: Date
    }
    export type Result = AddCategory.Result
  }
  