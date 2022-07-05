import { Component } from '@angular/core';
import {GreetingService} from './greetings.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myName:string = 'Enrique';
  public titleStyle = {}

  

  constructor(private greetings:GreetingService){

  }
  onSayHello(message){
    this.greetings.handleGreeting(message)

    this.actualizarTitulo()
  }

  ActualizarClase(nombre){
    return{
      'success' : nombre.length>10 && nombre.length<16,
      'very_success' : nombre.length>=16,
      'malarda' : nombre.length<10
    }
    
  }
  actualizarTitulo(){
    this.titleStyle = {
      'margin-top' : '40px',
      'color': this.greetings.counter <2 ? 'red' : 'green'
      

    }
  }

}
