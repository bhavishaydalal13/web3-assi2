import express from 'express'
import { createuser,deleteuser,updateuser,getuser,getuserbyid } from '../controller/user.js'
const router = express.Router()
router.get('/user',getuser)
router.get('/user/:id',  getuserbyid)
router.post('/user',createuser)
router.put('/update/:id',updateuser)
router.delete('/delete/:id',deleteuser)
export default router