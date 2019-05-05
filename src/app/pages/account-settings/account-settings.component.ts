import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../servicios/servicios.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _settingsService: SettingsService) { }

  ngOnInit() {

    let elementosSelectores: any = document.getElementsByClassName("selector");
    let color: string  = this._settingsService.loadSettingsColor();

    for (let ref of elementosSelectores){
      if (ref.getAttribute("data-theme") == color){
        ref.classList.add('working');
      }
    }
  }

  changePageColor(color: string, elementColorSelector: any){

    this._settingsService.saveSettingsColor(color);
    this._settingsService.changePageColor(color);
    this.aplicarSelector(elementColorSelector);
  }

  aplicarSelector(elementColorSelector: any){

    //obtener todos los elementos que contengan la clase 'selector', con el fin de removerles el atributo 'working'
    let elementosSelectores: any = document.getElementsByClassName("selector");
    for (let ref of elementosSelectores){
      ref.classList.remove('working');
    }

    //se añade el atributo working al elemento seleccionado
    elementColorSelector.classList.add('working');

  }
}
