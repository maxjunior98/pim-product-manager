const express = require("express")
const router = express.Router()
const execute = require('../modules/database')
const logTime = require('../modules/log')

router.get('/get/:pid', async (req, res) => {
    const { pid } = req.params
    logTime('product/pid')
    query = 'SELECT * FROM PRODUCT WHERE PID = $1'
    const result = await execute(query, [pid])-
    res.status(200).send('GOT PRODUCT')
})

router.get('/build', async (req, res) => {
    logTime('product/build')
    const query = `CREATE TABLE PRODUCT (
        PID SERIAL PRIMARY KEY,
        TITLE VARCHAR(128),
        DESCRIPTION VARCHAR(256),
        PRICE NUMERIC(16,2)
    )`
    const result = await execute(query, [])
    res.status(200).send('TABLE BUILDED')
})

router.post('/new', async (req, res) => {
    logTime('product/new')
    const body = req.body
    const query = 'INSERT INTO PRODUCT (TITLE, DESCRIPTION, PRICE) VALUES ($1, $2, $3)'
    const result = await execute(query, [body.title, body.description, body.price])
    res.status(201).send('INSERT NEW PRODUCT')
})

module.exports = router