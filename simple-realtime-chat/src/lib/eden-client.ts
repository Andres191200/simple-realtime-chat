import { treaty } from '@elysiajs/eden'
import type { TApp } from '../app/api/[[...slugs]]/route'

// this require .api to enter /api prefix
export const edenClient = treaty<TApp>('localhost:3000').api