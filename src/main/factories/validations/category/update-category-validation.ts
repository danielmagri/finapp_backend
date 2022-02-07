import { CompositeValidation, ObjectKeyValidation } from '@/validation/validations'
import { TypeValidator } from '@/validation/validators'
import { UpdateCategoryController } from '@/presentation/controllers'

export const makeUpdateCategoryValidation = (): CompositeValidation<UpdateCategoryController.Request> => {
    const numberValidator = new TypeValidator('string')

    return new CompositeValidation([
        new ObjectKeyValidation(numberValidator, 'name'),
    ])
}