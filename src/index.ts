import Router from "fastify"
import JWT from "@fastify/jwt"
import Cookie from "@fastify/cookie"

const fastify = Router()

fastify.register(JWT, { secret: process.env.JWT_SECRET })
fastify.register(Cookie, { secret: process.env.COOKIE_SECRET })

fastify.get("/", () => process.env)

export default fastify
