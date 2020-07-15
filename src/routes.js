const express = require("express")
const routes = express.Router()
const ProductController = require("./controllers/ProductController")

//rotas para manipulacao de um Product
routes.get("/products", ProductController.index)
routes.get("/products/:id", ProductController.show)
routes.post("/products", ProductController.store)
routes.put("/products/:id", ProductController.update)
routes.delete("/products/:id", ProductController.destroy)

//exportando rotas para o server.js poder utilizar
module.exports = routes