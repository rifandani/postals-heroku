const express = require('express');
const cors = require('cors');
// files
const postals = require('./data/postals.json');

const app = express();

app.get('/postals', cors(), function (req, res) {
  const postalArr = postals;

  res.status(200).json(postalArr);
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80');
});
