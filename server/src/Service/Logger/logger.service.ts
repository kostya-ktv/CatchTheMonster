import { ILoggerService } from "./logger.interface";
import chalk from 'chalk'

export class Logger implements ILoggerService{
   private static _instance: Logger
   
   private _logger = chalk
   private constructor(){}

   public static getInstance(): Logger {
      if (!Logger._instance) Logger._instance = new Logger();
      return Logger._instance;
  }

   success(msg: string){
      console.log(this._logger.bgGreen(msg))
   }
   info(msg: string){
      console.log(this._logger.bgBlue(msg))
   }
   error(msg: string){
      console.log(this._logger.bgRed(msg))
   }
}
