const express = require('express');
const next = require('next');
const router = express.Router();
const { createProxyMiddleware } = require("http-proxy-middleware");
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
import * as configDev from './config.dev';
import * as configProduction from './config.production';

const app = next({ dev })
const routes = require('./routes');
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use("/api",
    router.use(
      '/goong',
      createProxyMiddleware({
        xfwd: true,
        target: dev ? configDev.HOST_NAME : configProduction.HOST_NAME,
        pathRewrite: (path, req) => {
          return `${path.replace("/api/goong", "")}&api_key=${dev ? configDev.API_KEY : configProduction.API_KEY}`;
        },
        secure: false,
        changeOrigin: true,
      })
    )
  );
  server.use(handle);
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

