import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { AddBudgetController } from '@/presentation/controllers'

export const makeAddBudgetValidation = (): CompositeValidation<AddBudgetController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new TypeValidator('number')
    const stringValidator = new TypeValidator('string')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['budgetValue', 'date', 'categoryId']),
        new ObjectKeyValidation(numberValidator, 'budgetValue'),
        new ObjectKeyValidation(stringValidator, 'date'),
        new ObjectKeyValidation(numberValidator, 'categoryId'),
    ])
}