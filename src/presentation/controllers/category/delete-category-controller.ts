import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { DeleteCategory } from '@/domain/usecases';

export class DeleteCategoryController implements Http.Controller {
    constructor(
        private readonly deleteCategory: DeleteCategory
    ) { }


    async handle(request: DeleteCategoryController.Request): Promise<Http.Response<DeleteCategoryController.Response>> {
        try {
            const result = await this.deleteCategory.delete({
                id: request.id,
            })

            return ok(result)

        } catch (error) {
            if (error instanceof IdentifiedError) {
                return new HttpError.Forbidden().pass(error)
            } else {
                return new HttpError.Server(String(error.stack))
            }
        }
    }


}

export namespace DeleteCategoryController {
    export type Request = {
        id: number
    }

    export type Response = DeleteCategory.Result
}