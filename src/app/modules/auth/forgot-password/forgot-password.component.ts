import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {CommonValidators} from '../../../core/validators/common-validators';
import {AuthService} from '../auth.service';
import {ToasterService} from '../../../core/services/toaster.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder,
              private authService: AuthService,
              private toasterService: ToasterService) {
    this.forgotPasswordForm = this.fb.group({email: ['', CommonValidators.email]});
  }

  ngOnInit(): void {
  }

  submitForgotPasswordForm() {
    this.authService.forgotPassword(this.forgotPasswordForm).subscribe({
      next: () => this.toasterService.success('Email sent', 'Instructions has been sent to your email'),
      error: () => this.toasterService.error('Something went wrong!!', 'Please check your email')
    });
  }
}
