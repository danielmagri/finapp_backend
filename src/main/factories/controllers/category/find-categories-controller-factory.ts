import { Http } from '@/presentation/protocols'
import { FindCategoriesController } from '@/presentation/controllers'
import { makeFindCategories } from '@/main/factories/usecases'

export const makeFindCategoriesController = (): Http.Controller => {
    const findCategories = makeFindCategories()
    const controller = new FindCategoriesController(findCategories)
    return controller
}