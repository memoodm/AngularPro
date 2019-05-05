// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modulos internos
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Modulos externos
import { SharedModule } from '../shared/shared.module';
import { ModulesModules } from '../components/components.module';

// Rutas propias de los modulos de PAGES
import { PagesRoutes } from './pages.routes';
import { AppModule } from '../app.module';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        AccountSettingsComponent
    ],
    imports: [
        PagesRoutes,
        SharedModule,
        FormsModule,
        ModulesModules
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    providers: [],
    bootstrap: []
})
export class PagesModules{ }