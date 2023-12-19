const BuilderModel = require('../builders/model')

const columns = [
    {name:'TITLE', type:'VARCHAR(128)'},
    {name:'DESCRIPTION', type:'VARCHAR(256)'},
    {name:'PRICE', type:'NUMERIC(16,2)'},
    {name:'STORE_FK', type:'INT'}
]
const key = {name:'PID', type:'SERIAL'}
const Product = new BuilderModel('PRODUCT', columns, '(TITLE,DESCRIPTION,PRICE,STORE_FK)', key)

module.exports = Product