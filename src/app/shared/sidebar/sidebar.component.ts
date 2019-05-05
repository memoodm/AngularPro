import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../servicios/servicios.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu:any;

  constructor(
    private _sidebar: SidebarService
    ) { }

  ngOnInit() {
    this.menu = this._sidebar.menu;
  }

}
