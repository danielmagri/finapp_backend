import { Http } from '@/presentation/protocols';
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { IdentifiedError } from '@/domain/errors';
import { FindCategories } from '@/domain/usecases';

export class FindCategoriesController implements Http.Controller {
    constructor(
        private readonly findCategories: FindCategories
    ) { }


    async handle(): Promise<Http.Response<FindCategoriesController.Response>> {
        try {
            const result = await this.findCategories.find()

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

export namespace FindCategoriesController {
    export type Response = FindCategories.Result
}