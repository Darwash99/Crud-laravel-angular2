import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  { path: 'usuario', redirectTo: 'usuario/index', pathMatch: 'full'},
  { path: 'usuario/index', component: IndexComponent },
  { path: 'usuario/create', component: CreateComponent },
  { path: 'usuario/edit/:idUsuario', component: EditComponent } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
