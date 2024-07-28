import { config } from "dotenv"
import express from "express"
import router from "../../src/index"
import serverless from "serverless-http"
config()

export const app = express().use(router)
export const handler = serverless(app)
