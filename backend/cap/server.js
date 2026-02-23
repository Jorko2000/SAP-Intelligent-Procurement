const express = require("express");
const appConfig = require("./config/app.config");
const registerApi = require("./api");
const errorHandler = require("./middleware/error-handler");

const app = express();
app.use(express.json());

registerApi(app);
app.use(errorHandler);

app.listen(appConfig.port, () =>
  console.log(`${appConfig.appName} running on port ${appConfig.port}`)
);
