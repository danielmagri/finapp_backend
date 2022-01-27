import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

export class CurrencyValidator<T> implements Validator {
    async validate(input: number): Promise<void | string> {
        var regexp = /^\d+\.\d{0,2}$/;

        if (!regexp.test(input.toString())) {
            return Invalidation.pattern()
        }
    }
}