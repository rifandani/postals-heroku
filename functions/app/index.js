import express from 'express';
// files
const router = require('./router');

/* My express App */
export default function expressApp(functionName) {
  const app = express();

  // Set router base path if in local dev
  const routerBasePath =
    process.env.NODE_ENV === 'dev'
      ? `/${functionName}`
      : `/.netlify/functions/${functionName}/`;

  // Setup routes
  app.use(routerBasePath, router);

  return app;
}
