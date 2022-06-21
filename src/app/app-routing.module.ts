import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./core/guards/auth.guard";


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    data: { showNav: false, showHeader: false, showFooter: false }
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    data: { showNav: false, showHeader: false, showFooter: false }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todos',
    loadChildren: () => import('./modules/todo/todo.module').then(m => m.TodoModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
