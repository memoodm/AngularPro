import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;

  @Input() porcentaje = 50;
  @Input() leyenda = 'Leyenda';

  @Output() porcentajeValue: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  decreasePorcentaje() {
    this.updatePorcentaje(this.porcentaje - 5);
  }
  increasePorcentaje() {
    this.updatePorcentaje(this.porcentaje + 5);
  }
  updatePorcentaje(value: number) {
    if (value == null || value === undefined){
      value = 0;
    }
    value = Number(value);
    if (value > 100) {
      value = 100;
    }
    if (value < 0) {
      value = 0;
    }

    //console.log(this.txtProgress);
    this.txtProgress.nativeElement.focus();

    this.porcentaje = value;
    this.porcentajeValue.emit(this.porcentaje);
  }
}
