import * as routes from '@/main/routes'
import { Express, Router } from 'express'


export default (app: Express): void => {
    const router = Router()
    app.use('/v1', router)

    for (const applyRoute of Object.values(routes)) {
        applyRoute(router)
    }
}