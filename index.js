const express = require('express');
const cors = require('cors');
// files
const router = require('./router');

const PORT = process.env.PORT || 3000;
const app = express();

// routes
app.use('/', router);

// server listener
app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
