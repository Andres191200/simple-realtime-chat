import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
    .get('/asd', 'Hello Nextjs')

export const GET = app.fetch 
export const POST = app.fetch 
export type TApp = typeof app 