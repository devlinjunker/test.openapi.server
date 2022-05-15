import path = require('path/posix');
import fs = require('fs');
import swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/swagger-jsdoc/*.controller.ts', "./src/swagger-jsdoc/*.type.ts"], // files containing annotations as above
  format: '.yaml'
};

const OUTPUT_FILE = 'spec/swagger-jsdoc-openapi.yaml';

const openapiSpecification = swaggerJsdoc(options as any);

// unsure why this is here but isn't liked by swagger editor: https://editor.swagger.io/
delete openapiSpecification.channels;

fs.writeFileSync(OUTPUT_FILE, openapiSpecification);

// console.log(JSON.stringify(openapiSpecification, null, 2));