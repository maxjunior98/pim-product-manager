const express = require("express")
const execute = require('../modules/database')
const logTime = require('../modules/log')

class FactoryRouter 
{
    constructor(model)
    {
        this.model = model
        this.router = express.Router()
        this.declareRoutes()
    }

    declareRoutes() {
        this.router.get('/get', async(req, res) => {
            query = `SELECT * FROM ${this.model.table} WHERE ${this.model.structure.key} = $1`
            const result = await execute(query, [pid])
            res.status(200).send(`GET ${this.table}`)
        })
    }

    getRouter() {
        return this.router
    }
}
