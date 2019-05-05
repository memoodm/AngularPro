import { Component, OnInit } from '@angular/core';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
    //funcion que inicializa las funciones del paquete visual con el que estamos trabajando
    init_plugins();
   }

  ngOnInit() {
  }

}
