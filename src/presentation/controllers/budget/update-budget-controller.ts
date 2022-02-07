import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { UpdateBudget } from '@/domain/usecases';
import { Validation } from '@/validation/protocols';

export class UpdateBudgetController implements Http.Controller {
    constructor(
        private readonly validation: Validation<UpdateBudgetController.Request>,
        private readonly updateBudget: UpdateBudget
    ) { }


    async handle(request: UpdateBudgetController.Request): Promise<Http.Response<UpdateBudgetController.Response>> {
        try {
            const badParams = await this.validation.validate(request)
            if (badParams) return new HttpError.BadRequest(badParams)

            const result = await this.updateBudget.update({
                id: request.id,
                budgetValue: request.budgetValue,
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

export namespace UpdateBudgetController {
    export type Request = {
        id: number
        budgetValue?: number
        categoryId?: number
    }

    export type Response = UpdateBudget.Result
}