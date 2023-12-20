const express = require("express")
const execute = require('../modules/database')
const logTime = require('../modules/log')

class BuilderRouter 
{
    constructor(model)
    {
        this.model = model
        this.router = express.Router()
        this.declareRoutes()
    }

    declareRoutes() {
        this.router.get('/get/:key', async(req, res) => {
            logTime(`${this.model.table} GET BY KEY`)
            const { key } = req.params
            const query = `SELECT * FROM ${this.model.table} WHERE ${this.model.key} = $1`
            const result = await execute(query, [key])
            res.status(200).send(result.rows)
            return result
        })

        this.router.get('/getBy', async(req, res) => {
            logTime(`${this.model.table} GET BY COLUMNS`)
            const { column, value } = req.query
            const query = `SELECT * FROM ${this.model.table} WHERE ${column} = $1`
            const result = await execute(query, [value])
            res.status(200).send(result.rows)
            return result
        })

        this.router.post('/create', async(req, res) => {
            logTime(`${this.model.table} CREATE`)
            const body = req.body
            const array = Object.values(body)
            const query = `INSERT INTO ${this.model.table} ${this.model.getColumns()} VALUES (${this.model.getSizeColumns()})`
            const result = await execute(query, array)
            res.status(201).send(`CREATE ON ${this.model.table}`)
            return result
        })

        this.router.put('/update', async(req, res) => {
            logTime(`${this.model.table} UPDATE`)
            const { column, value, key } = req.query
            const query = `UPDATE ${this.model.table} SET ${column} = $1 WHERE ${this.model.key.name} = $2`
            const result = await execute(query, [value, key])
            res.status(200).send(`UPDATE ON ${this.model.table}`)
            return result
        })
    }

    getRouter() {
        return this.router
    }
}

module.exports = BuilderRouter