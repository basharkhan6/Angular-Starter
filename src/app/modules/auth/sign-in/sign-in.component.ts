import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonValidators} from '../../../core/validators/common-validators';
import {AuthService} from "../auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public redirectUrl: string | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute) {
    this.signInForm = this.buildSignInForm();
  }

  ngOnInit(): void {
    this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'];
  }

  private buildSignInForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      password: ['', CommonValidators.minLength(6)],
    });
  }

  submitSignInForm(): void {
    console.log('Submitted signup form')
    if (this.signInForm.valid) {
      this.authService.signIn(this.signInForm.value, this.redirectUrl);
    }
  }
}
