import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import bookRouter from "./routes/book_routes"

dotenv.config()
const app = express()
app.use(bodyParser.urlencoded({extended:true,limit:'1mb'}))
app.use(bodyParser.json())
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on("error",(error)=>{console.error(error)})

db.once("open",()=>{console.log("connect to DB")})

app.use('/book',bookRouter)

export = app
