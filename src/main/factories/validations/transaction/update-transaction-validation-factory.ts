import { CompositeValidation, ObjectKeyValidation } from '@/validation/validations'
import { ValuesValidator, TypeValidator, DateValidator, CurrencyValidator } from '@/validation/validators'
import { UpdateTransactionController } from '@/presentation/controllers'
import { Transaction } from '@/domain/models'

export const makeUpdateTransactionValidation = (): CompositeValidation<UpdateTransactionController.Request> => {
    const numberValidator = new TypeValidator('number')
    const dateValidator = new DateValidator()
    const currencyValidator = new CurrencyValidator()
    const typeValidator = new ValuesValidator(Transaction.TransactionType)

    return new CompositeValidation([
        new ObjectKeyValidation(numberValidator, 'type'),
        new ObjectKeyValidation(numberValidator, 'value'),
        new ObjectKeyValidation(numberValidator, 'categoryId'),
        new ObjectKeyValidation(typeValidator, 'type'),
        new ObjectKeyValidation(dateValidator, 'date'),
        new ObjectKeyValidation(currencyValidator, 'value'),
    ])
}