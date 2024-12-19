import fastify from 'fastify'
import { TransactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'
export const app = fastify()

app.register(cookie)

app.register(TransactionsRoutes, {
  prefix: 'transactions',
})
