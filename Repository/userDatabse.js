import mongoose from "mongoose";
import userModel from "../schema/userSchema.js";


export async function userDatabasecreate(userDatabase) {

    try{

        const  user =await  userModel.create(userDatabase)

        return user


    }catch(error){
        console.log("Error in Database" + error)
    }
    
}


export async function userDatafind(email){
    try{

        const user = await userModel.findOne({email})
        return user

    }catch(error){
        console.log(error)
    }
}


export async function userDetailsDb(username){
    try{


        const user = await userModel.findOne({username})
        console.log(user)

        return user

    }catch(error){
        console.log(error)
    }
}

export async function userDetailsUpdate(token, coverphoto) {
  try {
    console.log("Received token:", token);
    console.log("Received coverphoto:", coverphoto);

    if (!token || !coverphoto) {
      throw new Error("Token and coverphoto URL are required");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const username = decoded.username;

    const updatedUser = await userModel.findOneAndUpdate(
      { username },
      { $set: { coverPhoto } },
      { new: true }
    );

    return updatedUser;

  } catch (error) {
    console.error("Error updating user coverphoto:", error.message);
    return null;
  }
}


export default {
    userDatabasecreate,
    userDatafind,
    userDetailsDb,
    userDetailsUpdate
}