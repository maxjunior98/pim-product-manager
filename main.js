require("dotenv").config()
const express = require("express")
const storeRouter = require("./app/router/store.router")
const employeeRouter = require("./app/router/employee.router")
const productsRouter = require("./app/router/product.router")

const port = process.env.PORT
const app = express()

app.use(express.json())

app.use('/store', storeRouter)
app.use('/employee', employeeRouter)
app.use('/products', productsRouter)

app.listen(port)
console.log(`Serviço rodando na porta ${port}`)