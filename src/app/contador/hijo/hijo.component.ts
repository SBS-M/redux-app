import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "./../../app.reducer";
import * as fromContador from './../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.sass']
})


export class HijoComponent implements OnInit {

  /* @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>(); */

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }



  multiplicar(){
    /* this.contador *= 2 */
    const action = new fromContador.MultiplicarAction(5);
    this.store.dispatch(action);
  }

  dividir(){
    /* this.contador /= 2 */
    const action = new fromContador.DividirAction(5);
    this.store.dispatch(action);
  }

  resetNieto(evento){
    /* this.contador = evento; */
  }

}
