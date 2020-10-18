const router = require("express").Router();

router.get("/notes", function(req, res) {
  store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(400).json(err));
});

router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => res.status(400).json(err));
});

module.exports = router;
