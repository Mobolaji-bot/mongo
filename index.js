import express from "express" 
import mongoDB from "./db/mongoDB.js"
import { createDoc } from "./models/Adaptations.js"
const app = express()
const port = process.env.PORT || 3000
const DATA = process.env.DATA || "mongodb://127.0.0.1:27017/Adaptations"

mongoDB(DATA)
createDoc()
app.listen(port, () => {
   console.log("server up") 
})