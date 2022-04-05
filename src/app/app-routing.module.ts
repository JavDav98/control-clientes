import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableroComponent} from "./components/tablero/tablero.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistroComponent} from "./components/registro/registro.component";
import {ConfiguracionComponent} from "./components/configuracion/configuracion.component";
import {EditarClienteComponent} from "./components/editar-cliente/editar-cliente.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: TableroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'config', component: ConfiguracionComponent},
  {path: 'cliente/edit/:id', component: EditarClienteComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
