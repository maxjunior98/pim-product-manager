const Store = require('../models/store')
const BuilderRouter = require('../builders/router')

const storeRouter = new BuilderRouter(Store)
const router = storeRouter.getRouter()

module.exports = router