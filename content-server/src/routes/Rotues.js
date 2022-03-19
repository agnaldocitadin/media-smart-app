import cors from 'cors'
import { expressGraphqlConfig } from './Graphql'
// import { loadMainContent, loadMovieSuggestions, loadTvShowSuggestions, loadAvailableChannels, loadFavorites } from '../../../libstream/src/API'
// import fetch from 'node-fetch'

// https://www.npmjs.com/package/node-fetch#json



export const routes = (app) => {
    app.use("/graphql", cors(), expressGraphqlConfig)

    // Routes
    // ...

    app.get("/", cors(), (req, res, next) => {
        res.status(200).send("OK")
    })

    app.get("/checkServices", cors(), (req, res, next) => {
        //TODO testar serviços e retornar status
        res.status(200).send()
    })

    // app.get("/testAPI", cors(), (req, res, next) => {
    //     loadFavorites("id", "pt_BR").then(json => {
    //         res.status(200).send(json)
    //     })
    // })
}