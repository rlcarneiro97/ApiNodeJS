const mongoose = require("mongoose")
const Product = mongoose.model("Product")

module.exports = {

    //lista produtos com paginacao
    async index(req, res){
        const {page = 1} = req.query
        const products = await Product.paginate({}, {page, limit: 5})
        return res.json(products)
    },

    //mostra um produto em especifico
    async show(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    //cria um novo produto
    async store(req, res){
        const product = await Product.create(req.body)
        return res.json(product)
    },

    //atualiza um produto existente
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(product)
    },

    //deleta um produto
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    },

}