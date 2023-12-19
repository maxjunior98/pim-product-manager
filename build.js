require("dotenv").config()
const execute = require('./app/modules/database')
const Store = require('./app/models/store')
const Product = require('./app/models/product')
const Employee = require('./app/models/employee')

async function build() {
    await execute(Store.getQuery(), [])
    await execute(Employee.getQuery(), [])
    await execute(Product.getQuery(), [])
}

build()
