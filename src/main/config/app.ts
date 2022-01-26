import express from 'express'

import setupRoutes from './routes'

export const buildApp = async (): Promise<express.Express> => {
    const app = express()

    setupRoutes(app)
    return app
}