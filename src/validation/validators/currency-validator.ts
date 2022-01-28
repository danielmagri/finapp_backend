import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

import validator from 'validator'

export class CurrencyValidator<T> implements Validator {
    async validate(input: number): Promise<void | string> {
        if (!validator.isCurrency(input.toString(), { allow_negatives: false, digits_after_decimal: [1, 2] })) {
            return Invalidation.pattern()
        }
    }
}