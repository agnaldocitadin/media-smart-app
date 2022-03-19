import Mongoose from 'mongoose'

const db = Mongoose.connection
db.on("error", console.error)
db.once("open", () => {
    console.log("Mongoose conectado!")
})
Mongoose.connect("mongodb://localhost:27017/project-mediacenter", { useNewUrlParser: true })