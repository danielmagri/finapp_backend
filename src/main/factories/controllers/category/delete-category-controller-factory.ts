import { Http } from '@/presentation/protocols'
import { DeleteCategoryController } from '@/presentation/controllers'
import { makeDeleteCategory } from '@/main/factories/usecases'

export const makeDeleteCategoryController = (): Http.Controller => {
    const DeleteCategory = makeDeleteCategory()
    const controller = new DeleteCategoryController(DeleteCategory)
    return controller
}