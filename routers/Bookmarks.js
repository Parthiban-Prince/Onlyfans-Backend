import express from 'express'
import {addBookmark ,removeBookmark ,Bookmarks} from '../controller/BookmarkController.js'
import Authenication from '../utils/Authenication.js'

const router  = express.Router()

router.post('/addBookmark',Authenication,addBookmark, (req,res)=>{
    console.log(req)
    res.json("I am getting")
})

router.get('/userBookmark',Authenication,Bookmarks)

router.delete('/removeBookmark',Authenication,removeBookmark)

export default router