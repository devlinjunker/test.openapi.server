const config = {
  tsconfigFilePath: "./tsconfig.json",
  controllers: ["./src/typoa/typoa.controller.ts"], // Path of your controllers
  openapi: {
    filePath: "./spec/typoa-openapi.yaml", // Where do you want to generate your openapi file
    format: "yaml", // 'json' | 'yaml'
    service: {
      // Used in the openapi definitions
      name: "my-service",
      version: "1.0.0",
    },
    securitySchemes: {
      // Openapi securitySchemes definitions
      company: {
        type: "apiKey",
        name: "x-company-id",
        in: "header",
      },
    },
  },
  router: {
    templateFilePath: "./src/typoa/template/template.hbs",
    filePath: "./src/typoa/build/routes.ts", // Where do you want to generate the router file
    // securityMiddlewarePath: './security.ts' // Optional, middleware called if you use the @Security() decorator
  },
};

export default config;
