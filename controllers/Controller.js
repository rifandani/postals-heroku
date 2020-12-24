const postals = require('../data/postals.json');

// GET /postals
exports.getPostals = (_, res) => {
  // all postals
  const postalArr = postals;

  res.status(200).json(postalArr);
};

// GET /postal
exports.getPostal = (req, res) => {
  const lurah = req.query.lurah;
  const camat = req.query.camat;
  const kota = req.query.kota;
  const prov = req.query.prov;
  const code = req.query.code;
  const postalArr = postals;
  let result = [];

  // jika ada query lurah
  if (lurah) {
    const urbans = postalArr.filter((el) =>
      el.urban.includes(lurah.toUpperCase()),
    );

    let urLength = urbans.length;
    for (let i = 0; i < urLength; i++) {
      result.push(urbans[i]);
    }
  }

  // kalau ada query camat
  if (camat) {
    const sub_districts = postalArr.filter((el) =>
      el.sub_district.includes(camat.toUpperCase()),
    );

    let suLength = sub_districts.length;
    for (let i = 0; i < suLength; i++) {
      result.push(sub_districts[i]);
    }
  }

  // kalau ada query kota
  if (kota) {
    const cities = postalArr.filter((el) =>
      el.city.includes(kota.toUpperCase()),
    );

    let ciLength = cities.length;
    for (let i = 0; i < ciLength; i++) {
      result.push(cities[i]);
    }
  }

  // kalau ada query prov
  if (prov) {
    const provinces = postalArr.filter((el) =>
      el.province_code.includes(prov.toString()),
    );

    let prLength = provinces.length;
    for (let i = 0; i < prLength; i++) {
      result.push(provinces[i]);
    }
  }

  // kalau ada query code
  if (code) {
    const postal_codes = postalArr.filter(
      (el) => el.postal_code === code.toString(),
    );

    let poLength = postal_codes.length;
    for (let i = 0; i < poLength; i++) {
      result.push(postal_codes[i]);
    }
  }

  res.status(200).json(result);
};

// GET /cities => unique city array
exports.getCities = (_, res) => {
  const uniqueCities = postals.filter((postal, i, arr) => {
    return i === arr.findIndex((el) => el.city === postal.city);
  });

  res.status(200).json(uniqueCities);
};

// GET /sub-districts => unique sub_district array
exports.getSubDistricts = (_, res) => {
  const uniqueSubDistricts = postals.filter((postal, i, arr) => {
    return i === arr.findIndex((el) => el.sub_district === postal.sub_district);
  });

  res.status(200).json(uniqueSubDistricts);
};

// GET /urbans => unique urban array
exports.getUrbans = (_, res) => {
  const uniqueUrbans = postals.filter((postal, i, arr) => {
    return i === arr.findIndex((el) => el.urban === postal.urban);
  });

  res.status(200).json(uniqueUrbans);
};

// POST /verify-phone
exports.verifyPhone = (req, res) => {
  /* request body = {
    createdAt: Date.now(),
    userId: 'asdasdasdsad',
    phoneNum: '+6282243199535',
    expiry: 60000
  } */
  const data = req.body;

  res.status(200).json(data);
};
