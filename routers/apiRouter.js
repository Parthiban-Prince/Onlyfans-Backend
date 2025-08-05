import express from 'express'
import authHandler from './authHandler.js'
import userHanlder from './userHandler.js'
import card from './suggestcard.js'
import postRouter from './postRouter.js'
import allPosts from './allPosts.js'
import Public from './Public.js'
import myPost from './myPost.js'
import Bookmarks from './Bookmarks.js'

const router = express.Router()

router.use('/auth',authHandler)

router.use('/my',userHanlder)

router.use('/suggestion',card)

router.use('/create',postRouter)

router.use('/Post',allPosts)

router.use('/Public',Public)

router.use("/owner",myPost)

router.use('/Bookmarks',Bookmarks)


export default router