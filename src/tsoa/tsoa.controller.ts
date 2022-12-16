import { Get, Path, Route } from "@tsoa/runtime";
import { AbstractController } from "../abstract.controller"
import { ExampleParam, ExampleResponse, MethodDef, ExampleMethod, ExampleError } from '../example.type';

class ExampleThing {
  name: string;
}

class FetchThingsResponse implements ExampleResponse {
  request: any | string;
  error?: ExampleError;
  result: Array<ExampleThing>
}


class FetchThingResponse implements ExampleResponse {
  request: any | string;
  error?: ExampleError;
  result: ExampleThing
}

@Route('things')
export class TsoaController extends AbstractController {
  
  // static getMethods(): Array<MethodDef> {
  //   return [{
  //     route: '/things/',
  //     type: 'GET',
  //     controller: TsoaController.fetchThings
  //   },{
  //     route: '/things/:id',
  //     type: 'GET',
  //     controller: TsoaController.fetchThing
  //   }]
  // }

  @Get()
  static fetchThings(
  ): FetchThingsResponse {
    throw new Error('Not Implemented Yet')
  }

  @Get('{id}')
  static fetchThing(
    @Path() id: number
  ): FetchThingResponse {
    throw new Error('Not Implemented Yet')
  }
}

// TsoaController.getMethods()[0].controller({});