import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { FindBudgetsController } from '@/presentation/controllers'

export const makeFindBudgetsValidation = (): CompositeValidation<FindBudgetsController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new TypeValidator('number')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['month', 'year']),
        new ObjectKeyValidation(numberValidator, 'month'),
        new ObjectKeyValidation(numberValidator, 'year'),
    ])
}