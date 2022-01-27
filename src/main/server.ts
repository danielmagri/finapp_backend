import 'module-alias/register'
import { buildApp, env } from '@/main/config'
import { DbConnection } from '@/infra/database/helpers'

DbConnection.getInstance().connect()
  .then(buildApp)
  .then((app) => {
    app.listen(env.port, () => console.log(`Server running at port ${env.port}`))
  })
  .catch(console.error)

