import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { AddTransaction } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';
import moment from 'moment';

export class AddTransactionController implements Http.Controller {
    constructor(
        private readonly validation: Validation<AddTransactionController.Request>,
        private readonly addTransaction: AddTransaction
    ) { }


    async handle(request: AddTransactionController.Request): Promise<Http.Response<AddTransactionController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.addTransaction.add({
                type: request.type,
                value: request.value,
                date: moment(request.date).toDate(),
                categoryId: request.categoryId
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

export namespace AddTransactionController {
    export type Request = {
        value: number
        type: number
        date: Date
        categoryId: number
    }

    export type Response = AddTransaction.Result
}