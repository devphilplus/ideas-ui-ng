import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { SignOutComponent } from './components/sign-out/sign-out.component';

const routes: Routes = [
  {
    path: "sign-up",
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => SignUpModule)
  },
  {
    path: "sign-out",
    component: SignOutComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }