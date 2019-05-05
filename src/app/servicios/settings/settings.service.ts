import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

    defaultTema = 'default-dark';

    constructor() {
        const settingsColor = localStorage.getItem('settingsColor');
        if (settingsColor) {
            this.changePageColor(settingsColor);
        } else {
            this.changePageColor(this.defaultTema);
        }
     }

    changePageColor(color: string) {
        document.getElementById('pageTheme').setAttribute('href', './assets/css/colors/' + color + '.css');
    }

    saveSettingsColor(color: string) {
        localStorage.setItem('settingsColor', color);
    }
    loadSettingsColor(): string {
        let color = localStorage.getItem('settingsColor');
        if(color){
            return color;
        }
        return this.defaultTema;
    }
}
