import { adaptRoute } from '@/main/adapters'
import { makeAddBudgetController, makeDeleteBudgetController, makeFindBudgetsController, makeUpdateBudgetController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyBudgetRoutes = (router: Router): void => {
  router.post('/budgets', adaptRoute(makeAddBudgetController()))
  router.get('/budgets', adaptRoute(makeFindBudgetsController()))
  router.put('/budgets/:id', adaptRoute(makeUpdateBudgetController()))
  router.delete('/budgets', adaptRoute(makeDeleteBudgetController()))

}