import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { ValuesValidator, RequiredValidator, TypeValidator, DateValidator, CurrencyValidator } from '@/validation/validators'
import { AddCategoryController } from '@/presentation/controllers'
import { Category } from '@/domain/models'

export const makeAddCategoryValidation = (): CompositeValidation<AddCategoryController.Request> => {
    const requiredValidator = new RequiredValidator()
    const stringValidator = new TypeValidator('string')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['name']),
        new ObjectKeyValidation(stringValidator, 'name'),
    ])
}