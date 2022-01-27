import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'
import moment from 'moment'

export class DateValidator<T> implements Validator {

    async validate(input: any): Promise<void | string> {
        if (!moment(input).isValid()) {
            return Invalidation.pattern()
        }
    }
}