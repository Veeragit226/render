const user=require('../model/Model')

const createuser=async(req,res)=>{
    const {name,age}=req.body
    try{
        const userdata=await user.create({name,age})
        res.status(200).json(userdata)
    }
    catch(err)
    {
        console.log(err)
    }
}

const getuser=async(req,res)=>{
    const {id}=req.params
    try{
        const getuser=await user.findById(id)
        res.status(200).json(getuser)
    }
catch(err){
    console.log(err)
}
}


const deleteuser=async(req,res)=>{
    const id=req.params.id
    try{
        user=await co
        res.status(200).json(deleteuser)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("done")
    }
}

module.exports={createuser,getuser,deleteuser}