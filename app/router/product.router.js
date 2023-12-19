const Product = require('../models/product')
const BuilderRouter = require('../builders/router')

const productRouter = new BuilderRouter(Product)
const router = productRouter.getRouter()

module.exports = router