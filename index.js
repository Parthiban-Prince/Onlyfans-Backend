import express from 'express'
import apiRouter from './routers/apiRouter.js'
import {Port} from './config/serverConfig.js'
import {DatabaseConnection} from './config/DatabaseServer.js'
import cors from 'cors'
import { socketConfig } from './config/SocketConfig.js'
import http from 'http'


const app = express()
const server = http.createServer(app)
socketConfig(server)



app.use(cors());

app.use(cors())

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.raw())






app.use("/api",apiRouter)








app.listen(Port,()=>{
    console.log("server is running" + Port)
    DatabaseConnection
})