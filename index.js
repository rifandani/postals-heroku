const express = require('express');
const cors = require('cors');
// files
const router = require('./router');

const PORT = process.env.PORT || 3000;
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false })); // form data object, value objectnya berasal dari input attribute name
app.use(express.json()); // request application/type === json

// routes
app.use('/', cors(), router);

// server listener
app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
