const express=require('express')
const app=express()

require('dotenv').config()
const mongoose=require('mongoose')
const userrouter=require('./Routes/Routes')

app.use(express.json())
app.use('/api/user',userrouter)


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('database connected')
    }).catch((msg) => {
        console.log(msg)
    })

const port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server startded at ${port}`)
})