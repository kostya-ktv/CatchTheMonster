import { Request, Response, NextFunction } from "express";
import { BaseController } from "../base.controller";
import { IUserController } from "./user.controller.interface";

export class UserController extends BaseController implements IUserController {
   constructor(){
      super()
   }
   public login(request: Request, response: Response, next: NextFunction):any {
      try {
         console.log(request);
         
         return this.ok(response)
      } catch (error) {
         console.log('Error')
         next(error)
      }
      
   }
   public logout(request: Request, response: Response, next: NextFunction): any {
      console.log(request);
      try {
         return this.ok(response)
      } catch (error) {
         next(error)
      }
   }

}