const express = require("express")
const execute = require('../modules/database')
const logTime = require('../modules/log')

class FactoryRouter 
{
    constructor(endpoint, table)
    {
        this.endpoint = endpoint
        this.table = table
        this.router = express.Router()
        this.declareRoutes()
    }

    declareRoutes() {
        this.router.get(this.endpoint, async(req, res) => {
            const { pid } = req.params
            logTime(this.endpoint)
            query = `SELECT * FROM ${this.table} WHERE PID = $1`
            const result = await execute(query, [pid])
            res.status(200).send(`GET ${this.table}`)
        })

        this.router.post(this.endpoint, async(req, res) => {
            const { pid } = req.params
            logTime(this.endpoint)
            query = `SELECT * FROM ${this.table} WHERE PID = $1`
            const result = await execute(query, [pid])
            res.status(200).send(`GET ${this.table}`)
        })
    }

    getRouter() {
        return this.router
    }
}

const productsFactory = new FactoryRouter('/products/:pid')
const productsRouter = productsFactory.getRouter()
const usuariosFactory = new FactoryRouter('/usuarios/:pid')
const usuariosRouter = usuariosFactory.getRouter()

module.exports = {
    productsRouter,
    usuariosRouter
}