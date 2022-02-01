import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { DeleteTransaction } from '@/domain/usecases';

export class DeleteTransactionController implements Http.Controller {
    constructor(
        private readonly deleteTransaction: DeleteTransaction
    ) { }


    async handle(request: DeleteTransactionController.Request): Promise<Http.Response<DeleteTransactionController.Response>> {
        try {
            const result = await this.deleteTransaction.delete({
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

export namespace DeleteTransactionController {
    export type Request = {
        id: number
    }

    export type Response = DeleteTransaction.Result
}