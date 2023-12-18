require("dotenv").config()
const express = require("express")
// const routers = require("./app/router/router")

const port = process.env.PORT
const app = express()

app.use(express.json())

// app.use('/product', routers.productsRouter)
// app.use('/usuarios', routers.productsRouter)

app.listen(port)
console.log(`Serviço rodando na porta ${port}`)