import { FindCategories } from '@/domain/usecases'
import { FindCategoriesRepository } from '@/data/protocols'

export class FindCategoriesImpl implements FindCategories {
    constructor(
        private readonly findCategoriesRepository: FindCategoriesRepository
    ) { }

    async find(): Promise<FindCategories.Result> {
        return await this.findCategoriesRepository.findCategory()
    }

}