import { hc } from "hono/client";

import { Apptype } from "@/app/api/[[...route]]/route";

export const client = hc<Apptype>(process.env.NEXT_PUBLIC_API_URL!); // Create a Hono client instance with the API URL
 