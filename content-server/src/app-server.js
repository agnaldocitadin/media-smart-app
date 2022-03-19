import express from 'express'
import Auth from './authentication/Auth'
import { routes } from './routes/Rotues'

const app = express()

const Server = {

    init: () => {
        app.use(Auth)
        Server.registerRoutes()
    },

    registerRoutes: () => {
        routes(app)
    },

    start: () => {
        Server.init()
        app.listen(3001, "0.0.0.0", () => console.log("Content Server running on port 3001."))
    }
}

Server.start()