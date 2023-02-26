import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContinueComponent } from './components/continue/continue.component';

const routes: Routes = [
  {
    path: "",
    component: SignUpComponent
  },
  {
    path: "continue/:token",
    component: ContinueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
