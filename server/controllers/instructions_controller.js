var instructionsQueryHelper = require("../db/instructionsQueryHelper.js")
var express = require("express")
var instructionsRouter = express.Router()

instructionsRouter.get("/", function(req, res) {
  instructionsQueryHelper.all(function(instructions) {
    res.json(instructions)
  })
})

module.exports = instructionsRouter
