import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { AddBudget } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';
import moment from 'moment';

export class AddBudgetController implements Http.Controller {
    constructor(
        private readonly validation: Validation<AddBudgetController.Request>,
        private readonly addBudget: AddBudget
    ) { }


    async handle(request: AddBudgetController.Request): Promise<Http.Response<AddBudgetController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.addBudget.add({
                budgetValue: request.budgetValue,
                month: request.month,
                year: request.year,
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

export namespace AddBudgetController {
    export type Request = {
        budgetValue: number
        month: number
        year: number
        categoryId: number
    }

    export type Response = AddBudget.Result
}