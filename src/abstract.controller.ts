import { MethodDef } from './example.type';

export abstract class AbstractController {

  static getMethods(): Array<MethodDef> {
    throw new Error("Methods not returned for " + this.toString().split(' ')[1]);
  }
}
