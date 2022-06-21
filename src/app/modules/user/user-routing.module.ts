import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
