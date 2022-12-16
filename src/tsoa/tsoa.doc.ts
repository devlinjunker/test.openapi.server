import {
  generateRoutes,
  generateSpec,
  ExtendedRoutesConfig,
  ExtendedSpecConfig,
} from "tsoa";

(async () => {
  const specOptions: ExtendedSpecConfig = {
    basePath: "/api",
    specVersion: 3,
    
    entryFile: "./src/tsoa/build/server.ts",
    outputDirectory: "./spec",
    controllerPathGlobs: ["./src/tsoa/*.controller.ts"],
    noImplicitAdditionalProperties: 'ignore',
    specFileBaseName: 'tsoa-openapi',
    yaml: true
  };

  const routeOptions: ExtendedRoutesConfig = {
    basePath: "/api",
    
    entryFile: "./src/tsoa/build/server.ts",
    routesDir: "./src/tsoa/build",
    controllerPathGlobs: ["./src/tsoa/*.controller.ts"],
    noImplicitAdditionalProperties: 'ignore',
    
    middleware: 'express',
    middlewareTemplate: 'src/tsoa/template/template.hbs'
  };

  await generateSpec(specOptions);

  await generateRoutes(routeOptions);
})();