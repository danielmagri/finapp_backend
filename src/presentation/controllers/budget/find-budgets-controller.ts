import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { FindBudgets } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';

export class FindBudgetsController implements Http.Controller {
    constructor(
        private readonly validation: Validation<FindBudgetsController.Request>,
        private readonly findBudgets: FindBudgets
    ) { }


    async handle(request: FindBudgetsController.Request): Promise<Http.Response<FindBudgetsController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.findBudgets.find(request)

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

export namespace FindBudgetsController {
    export type Request = FindBudgets.Params

    export type Response = FindBudgets.Result
}