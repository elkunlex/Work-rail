import { z } from "zod";
import { Hono } from 'hono';
import { zValidator } from "@hono/zod-validator"
import { loginSchema } from "../schemas"; // Adjust the import path as necessary


const app = new Hono()
    .post(
        "/login",
        zValidator("json", loginSchema),
          
      async (c) => {
            const { email, password } = c.req.valid("json"); // Extract the validated data from the request
            console.log({ email, password }); // Log the email and password for debugging purposes
            // You can add your authentication logic here, such as checking the credentials against a database
            // Here you would typically handle the login logic, such as checking the credentials against a database 
            return c.json({ email, password }, 200); // Return a success response with the email and password
        });

export default app; // Export the Hono app instance as the default export   
