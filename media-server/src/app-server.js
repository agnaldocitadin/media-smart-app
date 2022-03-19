import express from 'express'
import Auth from './authentication/Auth'
import { routes } from './routes/Routes'

const app = express()

const Server = {

    init: () => {
        app.use(express.static(__dirname + '/'));
        app.use(Auth)
        Server.registerRoutes()
    },

    registerRoutes: () => {
        routes(app)
    },

    start: () => {
        Server.init()
        app.listen(8700, () => console.log("Server started on port 8700."))
    }

}

Server.start()