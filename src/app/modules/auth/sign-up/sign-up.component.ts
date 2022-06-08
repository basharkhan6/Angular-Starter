import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.buildSignUpForm();
  }

  ngOnInit(): void {
  }

  submitSignUpForm(): void {
    console.log('Submitting', this.signUpForm.getRawValue());
  }


  private buildSignUpForm(): FormGroup {
    return this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

}
