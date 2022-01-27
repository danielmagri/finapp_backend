import express from 'express'

import setupMiddlewares from './middlewares'
import setupRoutes from './routes'

export const buildApp = async (): Promise<express.Express> => {
    const app = express()
    setupMiddlewares(app)
    setupRoutes(app)
    return app
}