import { DeleteCategory } from '@/domain/usecases'
import { DeleteCategoryRepository } from '@/data/protocols'

export class DeleteCategoryImpl implements DeleteCategory {
    constructor(
        private readonly deleteCategoryRepository: DeleteCategoryRepository
    ) { }

    async delete(params: DeleteCategory.Params): Promise<DeleteCategory.Result> {
        return await this.deleteCategoryRepository.deleteCategory(params)
    }

}