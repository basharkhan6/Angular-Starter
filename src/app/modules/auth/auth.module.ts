import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../../shared/shared.module';
import { SignOutComponent } from './sign-out/sign-out.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    SignOutComponent,
    ForgotPasswordComponent,
    EmailConfirmationComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
