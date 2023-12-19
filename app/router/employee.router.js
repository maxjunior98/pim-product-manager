const Employee = require('../models/employee')
const BuilderRouter = require('../builders/router')

const employeeRouter = new BuilderRouter(Employee)
const router = employeeRouter.getRouter()

module.exports = router