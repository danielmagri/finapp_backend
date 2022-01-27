import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

import validator from 'validator'

export class PhoneNumberValidator implements Validator {
  async validate (phoneNumber: string): Promise<void | string> {
    if (!validator.isMobilePhone(phoneNumber, 'pt-BR')) return Invalidation.pattern()
  }
}
