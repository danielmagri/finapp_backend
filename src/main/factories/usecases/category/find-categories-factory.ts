import { FindCategories } from '@/domain/usecases'
import { FindCategoriesImpl } from '@/data/usecases'
import { makeCategoryDbRepository } from '@/main/factories/infras'


export const makeFindCategories = (): FindCategories => {
    const CategoryDbRepository = makeCategoryDbRepository()
    return new FindCategoriesImpl(CategoryDbRepository)
}