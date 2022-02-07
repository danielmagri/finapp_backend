import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { DeleteBudget } from '@/domain/usecases';

export class DeleteBudgetController implements Http.Controller {
    constructor(
        private readonly deleteBudget: DeleteBudget
    ) { }


    async handle(request: DeleteBudgetController.Request): Promise<Http.Response<DeleteBudgetController.Response>> {
        try {
            const result = await this.deleteBudget.delete({
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

export namespace DeleteBudgetController {
    export type Request = {
        id: number
    }

    export type Response = DeleteBudget.Result
}