import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { Validation } from '@/validation/protocols';
import { FindTransactions } from '@/domain/usecases';

export class FindTransactionsController implements Http.Controller {
    constructor(
        private readonly validation: Validation<FindTransactionsController.Request>,
        private readonly findTransactions: FindTransactions
    ) { }


    async handle(request: FindTransactionsController.Request): Promise<Http.Response<FindTransactionsController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.findTransactions.find(request)

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

export namespace FindTransactionsController {
    export type Request = FindTransactions.Params

    export type Response = FindTransactions.Result
}