const express = require('express');
const cors = require('cors');
// files
const postals = require('./data/postals.json');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

// all postals
app.get('/postals', function (req, res) {
  const postalArr = postals;

  res.status(200).json(postalArr);
});

// one postal with query 'code'
// https://roompy-postals.herokuapp.com/postal?code=76111
app.get('/postal', function (req, res) {
  const code = req.query.code;
  const postalArr = postals;

  const postal = postalArr.filter((el) => el.postal_code === code.toString());

  if (postal === []) {
    return res
      .status(200)
      .json({
        postal,
        msg: 'Please, input a valid Indonesian Postal Code',
        code,
      });
  }

  res.status(200).json(postal);
});

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80');
});
