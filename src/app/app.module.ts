// angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Nopagefound404Component } from './shared/nopagefound404/nopagefound404.component';
import { RegisterComponent } from './register/register.component';

// routes
import { APP_ROUTES } from './app.routes';

// modules
import { PagesModules } from './pages/pages.module';

// services module
import { ServiciosModule } from './servicios/servicios.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Nopagefound404Component,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModules,
    APP_ROUTES,
    FormsModule,
    ServiciosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
