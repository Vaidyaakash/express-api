const express = require('express')
const latest = require('../Data/latestNews')

const latestRoute = express.Router()
latestRoute.route("/latest").get(latest.latestNews)

module.exports = latestRoute;