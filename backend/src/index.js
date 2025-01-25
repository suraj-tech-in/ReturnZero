const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')
const port = 5000


const app = express()

app.set('view engine','ejs')


app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})