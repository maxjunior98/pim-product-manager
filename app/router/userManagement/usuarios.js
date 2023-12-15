const express = require("express")
const router = express.Router()
const execute = require('../modules/database')
const logTime = require('../modules/log')



router.get('/get/:code', async (req, res) => {
    const { code } = req.params
    logTime('product/pid')
    query = 'SELECT * FROM USUARIOS WHERE CODE = $1'
    const result = await execute(query, [pid])-
    res.status(200).send('GOT PRODUCT')
})

router.post('/new', async (req, res) => {
    logTime('product/new')
    const body = req.body
    const query = 'INSERT INTO PRODUCT (TITLE, DESCRIPTION, PRICE) VALUES ($1, $2, $3)'
    const result = await execute(query, [body.title, body.description, body.price])
    res.status(201).send('INSERT NEW PRODUCT')
})

router.put('/update/:pid', async (req, res) => {
    logTime('update/pid')
    // IMPLEMENTAR UPDATE
    res.status(200).send('INSERT NEW PRODUCT')
})

router.put('/update/:pid', async (req, res) => {
    logTime('update/pid')
    // IMPLEMENTAR UPDATE
    res.status(200).send('INSERT NEW PRODUCT')
})

module.exports = router