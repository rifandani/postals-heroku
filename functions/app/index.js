const express = require('express');
const cors = require('cors');
// files

function expressApp(functionName) {
  // init express app and Router
  const app = express();
  const router = express.Router();

  // Set router base path if in local dev
  // : `/.netlify/functions/${functionName}/`;
  const routerBasePath =
    process.env.NODE_ENV === 'dev'
      ? `/${functionName}`
      : `/.netlify/functions/${functionName}/`;

  // routes
  router.get('/postals', require('../../controllers/Controller').getPostals);
  router.get('/postal', require('../../controllers/Controller').getPostal);
  router.get('/cities', require('../../controllers/Controller').getCities);
  router.get(
    '/sub-districts',
    require('../../controllers/Controller').getSubDistricts,
  );
  router.get('/urbans', require('../../controllers/Controller').getUrbans);

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  return app;
}

module.exports = expressApp;
