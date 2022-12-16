const express = require('express')
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

bindToRouter(app);