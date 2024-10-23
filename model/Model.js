const mongoose=require('mongoose')

const userdetail=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('users',userdetail)