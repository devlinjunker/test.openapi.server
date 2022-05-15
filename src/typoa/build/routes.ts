/* tslint:disable */
/* eslint-disable */
import express from 'express'
import { RuntimeResponse, Validator } from 'typoa'
import { ExampleMethod } from '../../example.type'
import { TypoaController } from '../typoa.controller'

const schemas = {"ExampleThing":{"type":"object","properties":{"name":{"type":"string"}},"required":["name"]},"ExampleError":{"type":"object","properties":{"message":{"type":"string"},"code":{"type":"number"}},"required":["message","code"]},"AnyValue":{"description":"Can be any value","nullable":true},"FetchThingsResponse":{"type":"object","properties":{"result":{"type":"array","items":{"$ref":"#/components/schemas/ExampleThing"}},"error":{"$ref":"#/components/schemas/ExampleError"},"request":{"$ref":"#/components/schemas/AnyValue"}},"required":["result","request"]},"FetchThingResponse":{"type":"object","properties":{"result":{"$ref":"#/components/schemas/ExampleThing"},"error":{"$ref":"#/components/schemas/ExampleError"},"request":{"$ref":"#/components/schemas/AnyValue"}},"required":["result","request"]}}

export function bindToRouter (router: express.Router) {
  router.get('/things', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const method: ExampleMethod = TypoaController.fetchThings;
      const data = await method(
      )

      const controller = { getStatus: () => { return data?.error?.code; }, getHeaders: () => { }}
      
      RuntimeResponse.send(controller, data, res)
    } catch (err) {
      return next(JSON.stringify({ code: 500, message: err.toString(), stack: err.stack }))
    }
  })
  router.get('/things/:id', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const method: ExampleMethod = TypoaController.fetchThing;
      const data = await method(
        ...(await Validator.validateAndParse(
          req, schemas as any,
          {
            params: [{"name":"id","in":"path","schema":{"type":"number"},"required":true}],
            body: undefined,
            bodyDiscriminatorFn: undefined
          }
        ) as any)
      )

      const controller = { getStatus: () => { return data?.error?.code; }, getHeaders: () => { }}
      
      RuntimeResponse.send(controller, data, res)
    } catch (err) {
      return next(JSON.stringify({ code: 500, message: err.toString(), stack: err.stack }))
    }
  })
}
