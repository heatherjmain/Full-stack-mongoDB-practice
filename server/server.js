var express = require("express")
var app = express()

app.use(express.static(__dirname + "/../client/build"))

var instructionsRouter = require("./controllers/instructions_controller.js")

app.use("/api/instructions", instructionsRouter)

app.listen(3000, function() {
  console.log("server started on port " + this.address().port)
})
