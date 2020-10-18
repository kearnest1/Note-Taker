var router = require("express").Router();
var path = require("path");

router.get("/", function(req, res) {
    res.sendFile(path.join("../public/index.html"));
  });

router.get("/notes", function(req, res) {
  res.sendFile(path.join("../public/notes.html"));
});

module.exports = router;
