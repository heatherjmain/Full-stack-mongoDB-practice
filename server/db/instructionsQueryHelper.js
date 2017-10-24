var MongoClient = require("mongodb").MongoClient

var instructionsQueryHelper = {
  url: "mongodb://localhost:27017/to_do_list",
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var instructionsCollection = db.collection("instructions")

      instructionsCollection.find().toArray(function(err, docs) {
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = instructionsQueryHelper
