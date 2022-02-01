import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { UpdateTransaction } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';
import moment from 'moment';

export class UpdateTransactionController implements Http.Controller {
    constructor(
        private readonly validation: Validation<UpdateTransactionController.Request>,
        private readonly updateTransaction: UpdateTransaction
    ) { }


    async handle(request: UpdateTransactionController.Request): Promise<Http.Response<UpdateTransactionController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.updateTransaction.update({
                id: request.id,
                type: request.type,
                value: request.value,
                date: request.date === undefined ? undefined : moment(request.date).toDate()
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

export namespace UpdateTransactionController {
    export type Request = {
        id: number
        value?: number
        type?: number
        date?: Date
    }

    export type Response = UpdateTransaction.Result
}