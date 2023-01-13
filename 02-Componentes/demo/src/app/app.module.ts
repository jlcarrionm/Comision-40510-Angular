import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';

import { LoginAdministradorComponent } from './components/login-administrador/login-administrador.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,

    LoginAdministradorComponent,
    LoginEstudianteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
