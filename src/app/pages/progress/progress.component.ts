import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public porcentaje1: number = 50;
  public porcentaje2: number = 20;

  constructor() { }

  ngOnInit() {
  }

}
