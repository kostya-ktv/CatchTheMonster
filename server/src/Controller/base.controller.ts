import { Response } from "express";

export abstract class BaseController {
   constructor(){}

   protected ok<T>(response: Response, data?: T) {
      return this.send(response, 200, data)
   }
   protected send<T>(response: Response, code: number, data: T) {
      return response.status(code).json(data)
   }
}