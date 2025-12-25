import { Elysia, t } from 'elysia';



const createRoom = new Elysia({prefix: '/rooms'}).post('/create', () => {
    console.log('ROOM CREATION');
})

const app = new Elysia({ prefix: '/api' }).use(createRoom)

export const GET = app.fetch 
export const POST = app.fetch 
export type TApp = typeof app 