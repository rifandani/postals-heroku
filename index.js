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
  const lurah = req.query.lurah;
  const camat = req.query.camat;
  const kota = req.query.kota;
  const code = req.query.code;
  const postalArr = postals;
  let result = [];

  // jika ada query lurah
  if (lurah) {
    const urbans = postalArr.filter((el) =>
      el.urban.includes(lurah.toUpperCase()),
    );

    for (let i = 0; i < urbans.length; i++) {
      result.push(urbans[i]);
    }
  }

  // kalau ada query camat
  if (camat) {
    const sub_districts = postalArr.filter((el) =>
      el.sub_district.includes(camat.toUpperCase()),
    );

    for (let i = 0; i < sub_districts.length; i++) {
      result.push(sub_districts[i]);
    }
  }

  // kalau ada query kota
  if (kota) {
    const cities = postalArr.filter((el) =>
      el.city.includes(kota.toUpperCase()),
    );

    for (let i = 0; i < cities.length; i++) {
      result.push(cities[i]);
    }
  }

  // kalau ada query code
  if (code) {
    const postal_codes = postalArr.filter(
      (el) => el.postal_code === code.toString(),
    );

    for (let i = 0; i < postal_codes.length; i++) {
      result.push(postal_codes[i]);
    }
  }

  res.status(200).json(result);
});

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
