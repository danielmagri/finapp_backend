import { UpdateCategory } from '@/domain/usecases'

export interface UpdateCategoryRepository {
    updateCategory: (params: UpdateCategoryRepository.Params) => Promise<UpdateCategoryRepository.Result>
}

export namespace UpdateCategoryRepository {
    export type Params = {
        id: number
        name?: string
        updatedAt: Date
    }
    export type Result = UpdateCategory.Result
}
