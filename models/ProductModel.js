const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productName:{
        type:String,
        required : true
    },
    price:{
        type:Number,
        required : true
    },
    description:{
        type:String
    },
    imageUrl:{
        type:String,
        required : true
    },
    gender:{
        type:String,
        required : true
    },
} , { timestamps : true })

module.exports = mongoose.model('Product',ProductSchema)