import suggestcardService from "../service/suggestService.js"

export default async function suggestController(req,res){


    const suggestcard = await suggestcardService()
  

    res.status(200).json({
        message:"succes",
        data:suggestcard
    })

}