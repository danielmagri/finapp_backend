import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

export class ValuesValidator<T> implements Validator {
  constructor(private readonly values: T) { }

  async validate(input: any): Promise<void | string> {
    if (!Object.values(this.values).includes(input)) {
      return Invalidation.pattern()
    }
  }
}