import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

import validator from 'validator'

export class ObjectIdValidator implements Validator {
  async validate (objectId: string): Promise<void | string> {
    if (!validator.isMongoId(String(objectId))) return Invalidation.pattern()
  }
}
