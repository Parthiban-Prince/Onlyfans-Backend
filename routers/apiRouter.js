import express from 'express'
import authHandler from './authHandler.js'
import userHanlder from './userHandler.js'
import card from './suggestcard.js'

const router = express.Router()

router.use('/auth',authHandler)

router.use('/my',userHanlder)

router.use('/suggestion',card)


export default router