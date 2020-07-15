const express = require("express")
const mongoose = require("mongoose")
const requireDir = require("require-dir")
const cors = require("cors")

//express usado para criacao de rotas
const app = express()
//habilitando o uso de json nas requisisoes do express
app.use(express.json())
//liberando projeto pra dominio publico com o cors
app.use(cors())
//conectando ao mongodb e verificando se vem ou nao erro "mongodb://localhost:27017/nodeapi"
mongoose.connect("mongodb+srv://deploy:uploaddeploy@cluster0.fgmry.mongodb.net/<dbname>?retryWrites=true&w=majority", {useUnifiedTopology:true, useNewUrlParser: true, useCreateIndex: true})
const db = mongoose.connection
db.on("Error", console.error.bind(console, "connection error: "))
db.once("open", function(){})

//usando o require dir pra importar todas as regras de negocio da pasta models
requireDir("./src/models")
//rota raiz da aplicacao
app.use("/api", require("./src/routes"))
//api ouvindo a porta 3001
app.listen(process.env.PORT || 80)