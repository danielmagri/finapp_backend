import { adaptRoute } from '@/main/adapters'
import { makeAddCategoryController, makeDeleteCategoryController, makeFindCategoriesController, makeUpdateCategoryController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyCategoryRoutes = (router: Router): void => {
  router.post('/categories', adaptRoute(makeAddCategoryController()))
  router.get('/categories', adaptRoute(makeFindCategoriesController()))
  router.put('/categories/:id', adaptRoute(makeUpdateCategoryController()))
  router.delete('/categories/:id', adaptRoute(makeDeleteCategoryController()))
}