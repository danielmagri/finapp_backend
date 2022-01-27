import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

import validator from 'validator'

export class EmailValidator implements Validator {
  async validate (email: string): Promise<void | string> {
    if (!validator.isEmail(email)) return Invalidation.pattern()
  }
}
