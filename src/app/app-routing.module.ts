import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SubordinadosComponent } from './components/subordinados/subordinados.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "subordinados", component: SubordinadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
