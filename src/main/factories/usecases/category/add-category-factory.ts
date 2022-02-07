import { AddCategory } from '@/domain/usecases'
import { AddCategoryImpl } from '@/data/usecases'
import { makeCategoryDbRepository } from '@/main/factories/infras'


export const makeAddCategory = (): AddCategory => {
    const categoryDbRepository = makeCategoryDbRepository()
    return new AddCategoryImpl(categoryDbRepository)
}