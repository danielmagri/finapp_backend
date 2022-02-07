import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { FindBudgets } from '@/domain/usecases';

export class FindBudgetsController implements Http.Controller {
    constructor(
        private readonly findBudgets: FindBudgets
    ) { }


    async handle(): Promise<Http.Response<FindBudgetsController.Response>> {
        try {
            const result = await this.findBudgets.find()

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
    export type Response = FindBudgets.Result
}