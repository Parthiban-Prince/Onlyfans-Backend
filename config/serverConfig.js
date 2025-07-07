import dotenv from 'dotenv'

dotenv.config()


export  const Port = process.env.PORT

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const DB_URL = process.env.DB_URL

export const Cname = process.env.CLOUD_NAME

export const Apikey = process.env.API_KEY

export const Apisecert = process.env.API_SECRET


export default {

    Port,
    JWT_SECRET_KEY,
    DB_URL,
    Cname,
    Apikey,
    Apisecert

}