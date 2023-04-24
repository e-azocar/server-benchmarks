import { Elysia } from 'elysia'
import cors from '@elysiajs/cors'

const app = new Elysia()
    .use(cors())
    .get('/status', () => ({
        status: 'ok'
    }))
    .listen(4000)

console.log(app.server?.hostname)

console.log(`Bun server is running on http://localhost:4000`)
