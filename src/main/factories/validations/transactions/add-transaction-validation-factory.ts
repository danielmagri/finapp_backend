import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { AddTransactionController } from '@/presentation/controllers'

export const makeAddTransactionValidation = (): CompositeValidation<AddTransactionController.Request> => {
    const requiredValidator = new RequiredValidator()
    const stringValidator = new TypeValidator('string')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['value']),
        new ObjectKeyValidation(stringValidator, 'value'),
    ])
}