
/**
 * @openapi
 * components:
 *   schemas:
 *      ExampleError:
 *        type: object
 *        properties:
 *          code: 
 *            type: number
 *          message: 
 *            type: string
 */
export type ExampleError = {
  message: string;
  code: number;
}

export type ExampleParam = {
  [key: string]: string;
}

export type ExampleResponse = {
  result?: Array<any> | any | string | number;
  error?: ExampleError;
  request: any;
}

export abstract class BaseResponse {
  error?: ExampleError;
  request: any;
}



export type ExampleMethod = (ExampleParam?) => ExampleResponse;
export type MethodDef = {
  route: string;
  type: 'GET' | 'POST' | 'PUT'
  controller: ExampleMethod;
}