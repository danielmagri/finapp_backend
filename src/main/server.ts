import 'module-alias/register'
import { buildApp, env } from '@/main/config'


buildApp().then((app) => {
  app.listen(env.port, () => console.log(`Server running at port ${env.port}`))
})