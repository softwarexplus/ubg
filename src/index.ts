import { NextFunction, Request, Response, Router } from "express"
import cookie from "cookie-parser"

const router = Router()

router.use(cookie(process.env.COOKIE_SECRET))
router.get("/", (_req, res) => res.send("Hello World"))

export default () => router
