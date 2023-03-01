import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPwComponent } from './components/reset-pw/reset-pw.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'reset',
    component: ResetPwComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPwRoutingModule { }
