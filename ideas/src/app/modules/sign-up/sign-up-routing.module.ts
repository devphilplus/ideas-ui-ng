import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContinueComponent } from './components/continue/continue.component';
import { AnonymousGuard } from 'src/app/classes/guards/anonymous.guard';

const routes: Routes = [
  {
    path: "",
    component: SignUpComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: "continue/:token",
    component: ContinueComponent,
    canActivate: [AnonymousGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpRoutingModule { }
