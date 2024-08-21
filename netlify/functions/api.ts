import serverless from "serverless-http"
import fastify from "../../src/index"
import { config } from "dotenv"

config()
export const handler = serverless(fastify as any)
