var requestHelper = require("./helpers/request_helper.js")

window.addEventListener("DOMContentLoaded", function() {
  requestHelper.getRequest("http://localhost:3000/api/instructions",
  function(instructions) {

    var mainDiv = document.getElementById("main")
    var list = document.createElement("ul")

    instructions.forEach(function(instruction) {
      var listItem1 = document.createElement("li")
      var listItem2 = document.createElement("li")
      var listItem3 = document.createElement("li")
      var listItem4 = document.createElement("li")
      var listItem5 = document.createElement("li")
      var listItem6 = document.createElement("li")

      listItem1.innerText = instruction.first
      listItem2.innerText = instruction.second
      listItem3.innerText = instruction.third
      listItem4.innerText = instruction.fourth
      listItem5.innerText = instruction.fifth
      listItem6.innerText = instruction.sixth

      list.appendChild(listItem1)
      list.appendChild(listItem2)
      list.appendChild(listItem3)
      list.appendChild(listItem4)
      list.appendChild(listItem5)
      list.appendChild(listItem6)
    })

    mainDiv.appendChild(list)
  })
})
