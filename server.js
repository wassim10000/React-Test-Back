
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const productRoutes = require('./routes/products')


const app = express()

app.use(express.json())

app.use((req,res,next)=>{
  console.log(req.path,req.method)
  next()
})

//routes
app.use('/api/products',productRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listening to requests
    app.listen(process.env.PORT, () => {
      console.log(" connected to db and listening on port",process.env.PORT)
    })
  })
  .catch((error)=>{
    console.log(error)
  })



