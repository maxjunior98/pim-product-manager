require("dotenv").config()
const express = require("express")
const product = require("./app/router/product")

const port = process.env.PORT
const app = express()

app.use(express.json())

app.use('/product', product)

app.listen(port)
console.log(`Serviço rodando na porta ${port}`)