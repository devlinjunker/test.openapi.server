import { Get, Path, Route } from "typoa";
import { AbstractController } from "../abstract.controller"
import { ExampleResponse, MethodDef, ExampleError, BaseResponse } from '../example.type';

class ExampleThing {
  name: string;
}

class FetchThingsResponse extends BaseResponse implements ExampleResponse {
  result: Array<ExampleThing>
}

class FetchThingResponse extends BaseResponse implements ExampleResponse {
  result: ExampleThing
}

@Route('things')
export class TypoaController {

  @Get()
  static fetchThings(
  ): FetchThingsResponse {
    throw new Error('Not Implemented Yet')
  }

  @Get('{id}')
  static fetchThing(
    @Path("id") id: number
  ): FetchThingResponse {
    throw new Error('Not Implemented Yet')
  }
}
