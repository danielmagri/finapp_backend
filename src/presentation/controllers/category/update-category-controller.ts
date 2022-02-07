import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { UpdateCategory } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';
import moment from 'moment';

export class UpdateCategoryController implements Http.Controller {
    constructor(
        private readonly validation: Validation<UpdateCategoryController.Request>,
        private readonly updateCategory: UpdateCategory
    ) { }


    async handle(request: UpdateCategoryController.Request): Promise<Http.Response<UpdateCategoryController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.updateCategory.update({
                id: request.id,
                name: request.name,
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

export namespace UpdateCategoryController {
    export type Request = {
        id: number
        name?: string
    }

    export type Response = UpdateCategory.Result
}