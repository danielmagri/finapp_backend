import { CompositeValidation, ObjectKeyValidation, RequiredValidation } from '@/validation/validations'
import { ValuesValidator, RequiredValidator, TypeValidator, DateValidator, CurrencyValidator } from '@/validation/validators'
import { AddTransactionController } from '@/presentation/controllers'
import { Transaction } from '@/domain/models'

export const makeAddTransactionValidation = (): CompositeValidation<AddTransactionController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new TypeValidator('number')
    const dateValidator = new DateValidator()
    const currencyValidator = new CurrencyValidator()
    const typeValidator = new ValuesValidator(Transaction.TransactionType)

    return new CompositeValidation([
        new RequiredValidation(requiredValidator, ['value', 'type', 'date', 'categoryId']),
        new ObjectKeyValidation(numberValidator, 'value'),
        new ObjectKeyValidation(numberValidator, 'type'),
        new ObjectKeyValidation(numberValidator, 'categoryId'),
        new ObjectKeyValidation(typeValidator, 'type'),
        new ObjectKeyValidation(dateValidator, 'date'),
        new ObjectKeyValidation(currencyValidator, 'value'),
    ])
}