import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ResetAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.sass']
})
export class NietoComponent implements OnInit {

/*   @Input() contador:number;
  @Output() cambioContadorNieto = new EventEmitter<number>(); */

  contador: number;
  constructor( private Store: Store<AppState>) {
    
  }

  ngOnInit() {
    this.Store.select('contador').subscribe((contador)=>{
      this.contador = contador;
    });
  } 

  reset(){
    const action = new ResetAction();
    this.Store.dispatch(action);
   /*  this.contador = 0;
    this.cambioContadorNieto.emit(this.contador); */
  }

}
