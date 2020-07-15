const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate")

const ProductSchema = new mongoose.Schema({
    
    title:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
    },

    url:{
        type: String,
        required: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },
})

//apontar que esse schema usa paginacao
ProductSchema.plugin(mongoosePaginate)
//criando schema de Product
mongoose.model("Product", ProductSchema)