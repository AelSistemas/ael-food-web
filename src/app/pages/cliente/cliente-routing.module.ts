import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormsComponent } from './cliente-forms/cliente-forms.component';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
  {
    path:'',
    component:ClienteFormsComponent
  },
  {
    path:'cliente-consulta',
    component:ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
