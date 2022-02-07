import { Http } from '@/presentation/protocols'
import { UpdateCategoryController } from '@/presentation/controllers'
import { makeUpdateCategory } from '@/main/factories/usecases'
import { makeUpdateCategoryValidation } from '@/main/factories/validations'

export const makeUpdateCategoryController = (): Http.Controller => {
    const validation = makeUpdateCategoryValidation()
    const UpdateCategory = makeUpdateCategory()
    const controller = new UpdateCategoryController(validation, UpdateCategory)
    return controller
}