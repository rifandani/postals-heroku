const express = require('express');
const cors = require('cors');
// files
const postals = require('./data/postals.json');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/postals', function (req, res) {
  const postalArr = postals;

  res.status(200).json(postalArr);
});

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
