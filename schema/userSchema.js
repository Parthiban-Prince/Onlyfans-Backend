import mongoose from "mongoose";
import bcrypt from 'bcrypt'



const userSchema = mongoose.Schema({
    name:{
        type:String,
        minLength:5,
    },
    email:{
        type:String,
        unique:true,
        minLength:5,
    },
    password:{
        type:String,
        minLength:5,
        select:true
    },
    username:{
        type:String,
        unique:true,
    },
    coverPhoto:{
        type:String,
    },
    profilePhoto:{
        type:String,
    },
    Bio:{
        type:String,
    },
    images:{
        type:mongoose.Schema.Types.Mixed,
        default:0,
        ref:"posts"
    },
    media:{
        type:mongoose.Schema.Types.Mixed,
        default:0,
        ref:"posts"
    }
},{timestamp:true})


userSchema.pre('save',function modifyPassword(next){
    const user= this
    const SaltRounds = bcrypt.genSaltSync(10)

    const hasedPassword = bcrypt.hashSync(user.password,SaltRounds)

    user.password =hasedPassword

        next()
   

})


export const userModel = mongoose.model('User',userSchema)

export default userModel
