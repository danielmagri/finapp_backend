import { AddCategory } from '@/domain/usecases'
import { AddCategoryRepository } from '@/data/protocols'

export class AddCategoryImpl implements AddCategory {
    constructor(
        private readonly addCategoryRepository: AddCategoryRepository
    ) { }

    async add(params: AddCategory.Params): Promise<AddCategory.Result> {
        const input = { ...params, createdAt: new Date(), updatedAt: new Date() }

        return await this.addCategoryRepository.addCategory(input)
    }

}