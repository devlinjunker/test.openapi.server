import { AbstractController } from "../abstract.controller"
import { ExampleParam, ExampleResponse, MethodDef, ExampleMethod, ExampleError } from '../example.type';
/**
 * @openapi
 * components:
 *   schemas:
 *     ExampleThing:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 */
class ExampleThing {
  name: string;
}

class FetchThingsResponse implements ExampleResponse {
  request: Object | string;
  error?: ExampleError;
  result: Array<ExampleThing>
}


class FetchThingResponse implements ExampleResponse {
  request: Object | string;
  error?: ExampleError;
  result: ExampleThing
}


class ExampleClass extends AbstractController {
  
  static getMethods(): Array<MethodDef> {
    return [{
      route: '/things/',
      type: 'GET',
      controller: ExampleClass.fetchThings
    },{
      route: '/things/:id',
      type: 'GET',
      controller: ExampleClass.fetchThing
    }]
  }

  /**
   * @openapi
   * /things:
   *    get:
   *      description: 'Retrieve All Things'
   *      responses:
   *        200:
   *          description: Success 
   *          content: 
   *            application/json:
   *              schema: 
   *                type: object
   *                properties:
   *                  request: 
   *                    type: string
   *                  error: 
   *                    $ref: '#/components/schemas/ExampleError'
   *                  result: 
   *                    type: array
   *                    items: 
   *                      $ref: '#/components/schemas/ExampleThing'
   *        400:
   *          description: 'Invalid Input'
   *        500:
   *          description: 'Internal Error'
   */
  static fetchThings(
    ExampleParam: {}
  ): FetchThingsResponse {
    throw new Error('Not Implemented Yet')
  }

  /**
   * @openapi
   * /things/:id:
   *    get:
   *      description: 'Retrieve A Thing By ID'
   *      responses:
   *        200:
   *          description: Success 
   *          content: 
   *            application/json:
   *              schema: 
   *                type: object
   *                properties:
   *                  request: 
   *                    type: string
   *                  error: 
   *                    $ref: '#/components/schemas/ExampleError'
   *                  result: 
   *                    $ref: '#/components/schemas/ExampleThing'
   *        400:
   *          description: 'Invalid Input'
   *        500:
   *          description: 'Internal Error'
   */
  static fetchThing(
    ExampleParam: { id: string }
  ): FetchThingResponse {
    throw new Error('Not Implemented Yet')
  }
}

ExampleClass.getMethods()[0].controller({});