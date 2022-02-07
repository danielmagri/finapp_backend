
import { DeleteCategory } from '@/domain/usecases'

export interface DeleteCategoryRepository {
    deleteCategory: (params: DeleteCategoryRepository.Params) => Promise<DeleteCategoryRepository.Result>
}

export namespace DeleteCategoryRepository {
    export type Params = {
        id: number
    }
    export type Result = DeleteCategory.Result
}
