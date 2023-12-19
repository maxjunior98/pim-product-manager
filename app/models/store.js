const BuilderModel = require('../builders/model')

const columns = [{name:'STORE_NAME', type:'VARCHAR(128)'}]
const key = {name:'SID', type:'SERIAL'}
const Store = new BuilderModel('STORE', columns, '(STORE_NAME)', key)

module.exports = Store