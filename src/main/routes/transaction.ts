import { Router } from 'express'

export const applyTransactionRoutes = (router: Router): void => {
  router.get('/transactions', (_, res) => {
    res.send('Running')
  })

}
