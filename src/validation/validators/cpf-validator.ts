import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

import { cpf } from 'cpf-cnpj-validator'

export class CpfValidator implements Validator {
  async validate (document: string): Promise<void | string> {
    if (!cpf.isValid(document)) return Invalidation.pattern()
  }
}
