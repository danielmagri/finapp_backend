import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { Validation } from '@/validation/protocols';
import { AddCategory } from '@/domain/usecases';

export class AddCategoryController implements Http.Controller {
    constructor(
        private readonly validation: Validation<AddCategoryController.Request>,
        private readonly addCategory: AddCategory
    ) { }


    async handle(request: AddCategoryController.Request): Promise<Http.Response<AddCategoryController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.addCategory.add({
                name: request.name
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

export namespace AddCategoryController {
    export type Request = {
        name: string
    }

    export type Response = AddCategory.Result
}