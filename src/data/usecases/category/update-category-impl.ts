import { UpdateCategory } from '@/domain/usecases'
import { UpdateCategoryRepository } from '@/data/protocols'

export class UpdateCategoryImpl implements UpdateCategory {
    constructor(
        private readonly updateCategoryRepository: UpdateCategoryRepository
    ) { }

    async update(params: UpdateCategory.Params): Promise<UpdateCategory.Result> {
        const input = { ...params, updatedAt: new Date() }

        return await this.updateCategoryRepository.updateCategory(input)
    }

}