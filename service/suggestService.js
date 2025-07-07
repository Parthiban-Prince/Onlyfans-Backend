import suggestcardDB from "../Repository/suggestdb.js"

export default async function suggestcardService() {

    const userdata = await suggestcardDB()

    return userdata


    
}