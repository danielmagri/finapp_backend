import { Http } from '@/presentation/protocols'
import { AddCategoryController } from '@/presentation/controllers'
import { makeAddCategory } from '@/main/factories/usecases'
import { makeAddCategoryValidation } from '@/main/factories/validations'

export const makeAddCategoryController = (): Http.Controller => {
    const validation = makeAddCategoryValidation()
    const addCategory = makeAddCategory()
    const controller = new AddCategoryController(validation, addCategory)
    return controller
}