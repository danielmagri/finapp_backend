import { Router } from 'express'

export const applyConfigRoutes = (router: Router): void => {
  router.get('/', (_, res) => {
    res.send('Running')
  })

}
