const express=require('express')


const router=express.Router()
const {createuser,getuser}=require('../crud/crud')

router.post('/adduser',createuser)
router.get('/getuser/:id',getuser)

module.exports=router