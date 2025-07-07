import express from 'express'
import apiRouter from './routers/apiRouter.js'
import {Port} from './config/serverConfig.js'
import {DatabaseConnection} from './config/DatabaseServer.js'
import cors from 'cors'


const app = express()


app.use(cors({
  origin: 'http://localhost:5173', // or '*' during dev
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.text())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.raw())






app.use("/api",apiRouter)








app.listen(Port,()=>{
    console.log("server is running" + Port)
    DatabaseConnection
})