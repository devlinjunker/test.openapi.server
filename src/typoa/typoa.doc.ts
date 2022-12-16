import path = require("path");
import { generate } from "typoa";
import config from "./typoa.config";

(async function () {
  await generate(config as any);
})();
