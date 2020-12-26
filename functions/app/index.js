const express = require('express');
const cors = require('cors');
// files

function expressApp(functionName) {
  // init express app and Router
  const app = express();
  const router = express.Router();

  // Set router base path if in local dev
  const routerBasePath =
    process.env.NODE_ENV === 'dev'
      ? `/${functionName}`
      : `/.netlify/functions/${functionName}/`;
  // : `/.netlify/functions/${functionName}/`;

  // routes
  router.get('/users', (req, res) => {
    res.json({
      users: [
        {
          name: 'steve',
        },
        {
          name: 'joe',
        },
      ],
    });
  });

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  return app;
}

module.exports = expressApp;
