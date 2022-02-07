import { DeleteCategory } from '@/domain/usecases'
import { DeleteCategoryImpl } from '@/data/usecases'
import { makeCategoryDbRepository } from '@/main/factories/infras'


export const makeDeleteCategory = (): DeleteCategory => {
  const CategoryDbRepository = makeCategoryDbRepository()
    return new DeleteCategoryImpl(CategoryDbRepository)
}