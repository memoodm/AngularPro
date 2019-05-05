// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Componentes internos
import { GraficaDonaComponent } from './grafica-dona/grafica-dona.component';

// libreria de graficas
import { ChartsModule } from 'ng2-charts';
import { IncrementComponent } from './increment/increment.component';

@NgModule({
    declarations: [
        GraficaDonaComponent,
        IncrementComponent
    ],
    imports: [
        ChartsModule,
        FormsModule
    ],
    exports: [
        GraficaDonaComponent,
        IncrementComponent
    ],
    providers: [],
    bootstrap: []
})
export class ModulesModules{ }