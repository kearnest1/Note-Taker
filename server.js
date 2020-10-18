const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.json())
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + './public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + './public/notes.html'));
  });

  app.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  