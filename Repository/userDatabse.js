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

export async function userDetailsUpdate(userData) {
  try {
    const {
      oldusername,
      coverPhoto,
      profilePhoto,
      Bio,
      name,
      username
    } = userData;

    const updatedUser = await userModel.findOneAndUpdate(
      { username: oldusername }, // Assuming "oldusername" matches the current username in DB
      {
        $set: {
          coverPhoto,
          profilePhoto,
          Bio,
          name,
          username
        }
      },
      { new: true } // Return the updated document
    );

    return updatedUser;

  } catch (error) {
    console.error("Error updating user details:", error.message);
    return null;
  }
}


export async function userDetailsDBbyName(name){
    try{


        const user = await userModel.findOne({name})
        console.log(user)

        return user

    }catch(error){
        console.log(error)
    }
}



export default {
    userDatabasecreate,
    userDatafind,
    userDetailsDb,
    userDetailsUpdate,
    userDetailsDBbyName
}