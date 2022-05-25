import { getAbsolutePath } from 'esm-path'
import Koa from 'koa'
import koaStatic from 'koa-static'

const PORT = process.env.PORT || 3000

const app = new Koa()

app.use(koaStatic(getAbsolutePath(import.meta.url, '../web')))

app.listen(PORT)
