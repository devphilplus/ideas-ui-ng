import { NgModule, inject } from '@angular/core';
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
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => SignUpModule),
    canActivate: [AnonymousGuard]
  },
  {
    path: 'forgot-pw',
    loadChildren: () => import('./modules/forgot-pw/forgot-pw.module').then(m => ForgotPwModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "admin",
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: "client-admin",
  //   loadChildren: () => import('./modules/client-admin/client-admin.module').then(m => m.ClientAdminModule)
  // },
  {
    path: "tenant-admin",
    loadChildren: () => import('./modules/tenant-admin/tenant-admin.module').then(m => m.TenantAdminModule)
  },
  {
    path: "user-profile",
    loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'inventory',
    loadChildren: () => import('./modules/inventory/inventory.module').then(m => m.InventoryModule),
  },
  // {
  //   path: "join",
  //   loadChildren: () => import('./modules/client-join/client-join.module').then(m => m.ClientJoinModule),
  //   canActivate: [AuthenticatedGuard]
  // },
  {
    path: 'crms',
    loadChildren: () => import('./modules/crms/crms.module').then(m => m.CrmsModule)
  },
  {
    path: 'hr',
    loadChildren: () => import('./modules/hr/hr.module').then(m => m.HrModule)
  },
  {
    path: 'join',
    loadChildren: () => import('./modules/tenant-join/tenant-join.module').then(m => m.TenantJoinModule),
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "sign-out",
    component: SignOutComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "sign-in",
    component: SignInComponent,
    canActivate: [AnonymousGuard]
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
