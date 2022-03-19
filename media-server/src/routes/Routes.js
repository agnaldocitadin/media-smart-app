import path from 'path'
import cors from 'cors'
import { readChunk } from '../reader/FileReader'
import { RequestUtils } from '../utils/RequestUtils';

export const routes = (app) => {
    
    app.options("/*", (req, res, next) => {
        console.log("[ -- OPTIONS -- ]")
        res.header("Access-Control-Allow-Headers", "range")
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Vary", "Access-Control-Request-Headers")
        res.status(204).send()
    })

    app.get("/*", cors(), (req, res, next) => {
        let arquivo = path.join(__dirname.replace("dist", "") + req.url.replace("/stream", "/files"))
        if (req.headers['range']) {
            let range = RequestUtils.readBytesRange(req)
            let chunk = readChunk(arquivo, range.start, range.end)
            res.writeHead(206, { 
                'Content-Range': 'bytes ' + range.start + '-' + range.end + '/' + chunk.status.size, 
                'Accept-Ranges': 'bytes', 
                'Content-Length': chunk.chunkSize, 
                'Content-Type': 'video/webm' 
            })
            chunk.stream.pipe(res)
            console.log("[ -- GET (Range) -- ]", range.start, range.end)
        }
        else {
            console.log("[ -- GET (file) -- ]", arquivo)
            res.sendFile(arquivo)
        }
    })

}