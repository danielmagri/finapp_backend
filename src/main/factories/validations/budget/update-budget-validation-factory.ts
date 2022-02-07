import { CompositeValidation, ObjectKeyValidation } from '@/validation/validations'
import { TypeValidator } from '@/validation/validators'
import { UpdateBudgetController } from '@/presentation/controllers'

export const makeUpdateBudgetValidation = (): CompositeValidation<UpdateBudgetController.Request> => {
    const numberValidator = new TypeValidator('number')

    return new CompositeValidation([
        new ObjectKeyValidation(numberValidator, 'budgetValue'),
        new ObjectKeyValidation(numberValidator, 'categoryId'),
    ])
}