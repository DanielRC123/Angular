import { Component, Input, Output, EventEmitter } from '@angular/core';
import {GreetingService} from '../greetings.service'
@Component({
    selector: 'custom-hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css'],
    providers: [GreetingService]
})
export class HelloComponent{
    @Input() name:string;
    @Output() sayHello:EventEmitter<string> = new EventEmitter<string>();

    public namesList:Array<string> = [];
    public inputName:string = '';

    constructor(private greeting :GreetingService){ }

    onClick(){
        console.log('odtias GreetingService desde helloComponent ' + this.greeting.counter )
        this.sayHello.emit('Hello!');
    }

    addName(){
        this.namesList.push(this.inputName);
        this.inputName = '';
        console.log(this.namesList);
    }
}