import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { RequiredValidator, TypeValidator } from '@/validation/validators'
import { AddCategoryController } from '@/presentation/controllers'

export const makeAddCategoryValidation = (): CompositeValidation<AddCategoryController.Request> => {
    const requiredValidator = new RequiredValidator()
    const stringValidator = new TypeValidator('string')

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['name']),
        new ObjectKeyValidation(stringValidator, 'name'),
    ])
}