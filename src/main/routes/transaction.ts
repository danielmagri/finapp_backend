import { adaptRoute } from '@/main/adapters'
import { makeAddTransactionController, makeDeleteTransactionController, makeFindTransactionsController, makeUpdateTransactionController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyTransactionRoutes = (router: Router): void => {
  router.post('/transactions', adaptRoute(makeAddTransactionController()))
  router.get('/transactions', adaptRoute(makeFindTransactionsController()))
  router.put('/transactions/:id', adaptRoute(makeUpdateTransactionController()))
  router.delete('/transactions/:id', adaptRoute(makeDeleteTransactionController()))

}