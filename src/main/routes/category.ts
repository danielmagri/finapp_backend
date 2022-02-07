import { adaptRoute } from '@/main/adapters'
import { makeAddCategoryController, makeFindCategoriesController } from '@/main/factories/controllers'

import { Router } from 'express'

export const applyCategoryRoutes = (router: Router): void => {
  router.post('/categories', adaptRoute(makeAddCategoryController()))
  router.get('/categories', adaptRoute(makeFindCategoriesController()))
}