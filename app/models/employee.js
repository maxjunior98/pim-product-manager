const BuilderModel = require('../builders/model')

const columns = [
    {name:'NAME_EMP', type:'VARCHAR(128)'},
    {name:'ROLE_EMP', type:'VARCHAR(128)'},
    {name:'STORE_FK', type:'INT'}
]
const key = {name:'EID', type:'SERIAL'}
const Employee = new BuilderModel('EMPLOYEE', columns, '(NAME_EMP,ROLE_EMP,STORE_FK)', key)

module.exports = Employee