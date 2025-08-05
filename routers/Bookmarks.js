import express from 'express'
import {addBookmark ,removeBookmark ,Bookmarks} from '../controller/BookmarkController.js'

const router  = express.Router()

router.post('/addBookmark',addBookmark, (req,res)=>{
    console.log(req)
    res.json("I am getting")
})

router.get('/userBookmark',Bookmarks)

router.delete('/removeBookmark',removeBookmark)

export default router