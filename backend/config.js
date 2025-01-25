const mongoose = require('mongoose')
const connect = mongoose.connect("mongodb://localhost:22017/hackathon")

connect.then(()=>{
     console.log('database connected')
}).catch(()=>{
    console.log('error connecting the database')
})

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        requiired: true
    }
})

const collection = new mongoose.model('users',userSchema)

module.exports = collection
