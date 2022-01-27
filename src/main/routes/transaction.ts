import { adaptRoute } from '@/main/adapters'
import { makeAddTransactionController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyTransactionRoutes = (router: Router): void => {
  router.post('/transactions', adaptRoute(makeAddTransactionController()))

}
