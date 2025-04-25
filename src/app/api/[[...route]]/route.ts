import {  Hono } from 'hono';
import { handle } from 'hono/vercel';

import auth from '@/features/auth/server/route';

const app = new Hono().basePath('/api')

const routes = app
  .route("/auth", auth);  // Mount the auth routes to the /api/auth path
  // Define the /api/auth route and mount the auth routes to it   
  
export const GET = handle(app); // Export the GET handler for Vercel

export type Apptype = typeof routes; // Export the app type for type inference