const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const bodyParser = require("body-parser");
import { bindToRouter } from "./routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const swaggerDocument = YAML.load("./spec/typoa-openapi.yaml");

// Add /doc endpoint for swagger
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

bindToRouter(app);
