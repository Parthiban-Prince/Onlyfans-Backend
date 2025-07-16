import { Schema } from "zod";

const validate = (Schema)=>{

    return async (req,res,next)=>{
        try {
          
            const result = await Schema.parse(req.body);
               next();
            return result
         
           

        }
        catch(error){
            console.log("error in zod validation" +error)
            return res.json({
                message:"validation error",
                status:404
            })
        }
    }

}

export default validate