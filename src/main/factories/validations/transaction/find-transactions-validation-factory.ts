import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { FindTransactionsController } from '@/presentation/controllers'

export const makeFindTransactionsValidation = (): CompositeValidation<FindTransactionsController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new TypeValidator('number')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['page', 'per_page']),
        new ObjectKeyValidation(numberValidator, 'page'),
        new ObjectKeyValidation(numberValidator, 'per_page'),
    ])
}