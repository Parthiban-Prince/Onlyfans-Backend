import express from "express";
import { publicController } from "../controller/userController.js";


export const router = express.Router()

router.get('/:profilname',publicController)

export default router