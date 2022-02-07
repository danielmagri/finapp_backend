import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { AddBudgetController } from '@/presentation/controllers'

export const makeAddBudgetValidation = (): CompositeValidation<AddBudgetController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new TypeValidator('number')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['budgetValue', 'month', 'year', 'categoryId']),
        new ObjectKeyValidation(numberValidator, 'budgetValue'),
        new ObjectKeyValidation(numberValidator, 'month'),
        new ObjectKeyValidation(numberValidator, 'year'),
        new ObjectKeyValidation(numberValidator, 'categoryId'),
    ])
}