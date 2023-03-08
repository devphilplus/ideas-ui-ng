import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ForgotPwModule } from './modules/forgot-pw/forgot-pw.module';
import { AuthenticatedGuard } from './classes/guards/authenticated.guard';
import { AnonymousGuard } from './classes/guards/anonymous.guard';

const routes: Routes = [
  {
    path: "sign-up",
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => SignUpModule)
  },
  {
    path: 'forgot-pw',
    loadChildren: () => import('./modules/forgot-pw/forgot-pw.module').then(m => ForgotPwModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "user-profile",
    loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: "sign-out",
    component: SignOutComponent,
    canActivate: [AnonymousGuard]
  },
  {
    path: "sign-in",
    component: SignInComponent,
    canActivate: [AuthenticatedGuard]
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
