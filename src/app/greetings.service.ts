import { Injectable } from '@angular/core';
import { LoggerService }from './logger.service'

@Injectable()
export class GreetingService{
    public counter = 0;
    constructor(private logger:LoggerService){

    }
    handleGreeting(message:string){
        this.counter++
        this.logger.log(message)
    }
    
}