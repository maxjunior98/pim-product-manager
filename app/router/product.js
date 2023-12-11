const express = require("express")
const router = express.Router()
const execute = require('../modules/database')

router.get('/:pid', async (req, res) => {
    query = `SELECT * FROM`
})

router.get('/build', async (req, res) => {
    query = `CREATE TABLE PRODUCT (
        PID SERIAL PRIMARY KEY,
        TITLE VARCHAR(128),
        DESCRIPTION VARCHAR(256),
        PRICE NUMBER(16,2)
    )`
    execute(query, [])
})

module.exports = router