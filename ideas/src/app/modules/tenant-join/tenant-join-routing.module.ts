import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinComponent } from './components/join/join.component';

const routes: Routes = [
  {
    path: '',
    component: JoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantJoinRoutingModule { }
