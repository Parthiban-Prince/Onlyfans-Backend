import mongoose from 'mongoose'
import { DB_URL } from './serverConfig.js'


export async function DatabaseConnection() {

    try{
        const connected = await mongoose.connect(DB_URL)
        console.log("Database Connected")
    }
    catch(error){
        console.log("Database connection" +error)
    }
}

export default DatabaseConnection()