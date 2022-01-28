import { adaptRoute } from '@/main/adapters'
import { makeAddTransactionController, makeFindTransactionsController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyTransactionRoutes = (router: Router): void => {
  router.post('/transactions', adaptRoute(makeAddTransactionController()))
  router.get('/transactions', adaptRoute(makeFindTransactionsController()))
  // router.update('/transactions/:id', adaptRoute(makeAddTransactionController()))
  // router.delete('/transactions/:id', adaptRoute(makeAddTransactionController()))

}
