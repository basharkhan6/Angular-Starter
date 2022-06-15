import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonValidators} from '../../../core/validators/common-validators';
import {AuthService} from '../services/auth.service';
import {ToasterService} from '../../../core/services/toaster.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private toasterService: ToasterService) {
    this.signUpForm = this.buildSignUpForm();
  }

  ngOnInit(): void {
  }

  submitSignUpForm(): void {
    this.authService.signUp(this.signUpForm).subscribe(
      () => this.toasterService.success('Success', 'Sign up successful. Please check your email.'),
      () => this.toasterService.error('Error', 'Failed to sign up!!')
    );
  }


  private buildSignUpForm(): FormGroup {
    const group = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', CommonValidators.email],
      password: ['', CommonValidators.minLength(6)],
      confirm_password: ['', CommonValidators.minLength(6)],
      phone: ['', CommonValidators.minLength(10)]
    });
    group.addValidators(CommonValidators.matchPassword('password', 'confirm_password'));
    return group;
  }

}
