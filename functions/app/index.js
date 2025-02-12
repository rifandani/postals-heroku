const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const currentDir = process.env.LAMBDA_TASK_ROOT;

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

  // routes => /roompy/postals, dll
  router.get('/sub-districts', async (req, res) => {
    const postals = await fs.readFile(path.join(currentDir, 'postals.json'), {
      encoding: 'utf-8',
    });

    const uniqueSubDistricts = postals.filter((postal, i, arr) => {
      return (
        i === arr.findIndex((el) => el.sub_district === postal.sub_district)
      );
    });

    res.status(200).json(uniqueSubDistricts);
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
