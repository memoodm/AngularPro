import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [{
    path: '',
        component: PagesComponent,
        children: [
            {path: 'account-settings', component: AccountSettingsComponent},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'grafica1', component: Graficas1Component},
            {path: 'progress', component: ProgressComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
}];

export const PagesRoutes = RouterModule.forChild(pagesRoutes);