const express = require("express")
const homeApi = require("../Data/HomeAPI")

const homeRouter = express.Router()
homeRouter.route('/home').get(homeApi)


module.exports = homeRouter;