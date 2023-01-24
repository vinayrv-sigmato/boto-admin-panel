const express=require('express')

const router = express.Router()

const {registerAdmin,loginAdmin,getAdmin}= require('../controllers/AdminController')
const {protect}= require('../middleware/authmiddleware')
router.post('/',registerAdmin)
router.post('/login',loginAdmin)
router.get('/admin',protect,getAdmin)

module.exports=router
