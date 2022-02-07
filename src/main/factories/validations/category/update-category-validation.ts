import { CompositeValidation, ObjectKeyValidation } from '@/validation/validations'
import { ValuesValidator, TypeValidator, DateValidator, CurrencyValidator } from '@/validation/validators'
import { UpdateCategoryController } from '@/presentation/controllers'
import { Category } from '@/domain/models'

export const makeUpdateCategoryValidation = (): CompositeValidation<UpdateCategoryController.Request> => {
    const numberValidator = new TypeValidator('string')

    return new CompositeValidation([
        new ObjectKeyValidation(numberValidator, 'name'),
    ])
}