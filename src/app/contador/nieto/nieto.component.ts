import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.sass']
})
export class NietoComponent implements OnInit {

  @Input() contador:number;
  @Output() cambioContadorNieto = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  reset(){
    this.contador = 0;
    this.cambioContadorNieto.emit(this.contador);
  }

}
