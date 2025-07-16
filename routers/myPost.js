import express from "express";
import { ownerPostFindcontroller, postFindcontroller } from "../controller/postController.js";

export const  router = express.Router()

router.get('/me',ownerPostFindcontroller,)


export default router
