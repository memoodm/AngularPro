//angular
import {RouterModule, Routes, Router} from '@angular/router';

//components
import { LoginComponent } from './login/login.component';
import { Nopagefound404Component } from './shared/nopagefound404/nopagefound404.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '**', component: Nopagefound404Component}
];

export const APP_ROUTES = RouterModule.forRoot(
    appRoutes,
    {useHash: true}
);
