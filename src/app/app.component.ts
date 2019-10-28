 import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.action';
import { AppState } from "./app.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor(
    private store : Store<AppState>
  ){
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
      console.log("state ", contador);
      
    })
  }

  incrementar(){
    const action = new IncrementarAction();
    this.store.dispatch( action );
  }

  decrementar(){
    const action = new DecrementarAction();
    this.store.dispatch( action );
  }

}
