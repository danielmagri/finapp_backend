import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { FindTransactions } from '@/domain/usecases';

export class FindTransactionsController implements Http.Controller {
    constructor(
        private readonly findTransactions: FindTransactions
    ) { }


    async handle(): Promise<Http.Response<FindTransactionController.Response>> {
        try {
            const result = await this.findTransactions.find()

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

export namespace FindTransactionController {
    export type Response = FindTransactions.Result
}