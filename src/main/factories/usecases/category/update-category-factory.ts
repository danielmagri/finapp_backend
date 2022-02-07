import { UpdateCategory } from '@/domain/usecases'
import { UpdateCategoryImpl } from '@/data/usecases'
import { makeCategoryDbRepository } from '@/main/factories/infras'


export const makeUpdateCategory = (): UpdateCategory => {
    const CategoryDbRepository = makeCategoryDbRepository()
    return new UpdateCategoryImpl(CategoryDbRepository)
}