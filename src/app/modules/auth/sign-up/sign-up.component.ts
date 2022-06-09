import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommonValidators} from "../../../core/validators/common-validators";

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
    let group = this.fb.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, CommonValidators.emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required, Validators.minLength(6)],
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });
    group.addValidators(CommonValidators.matchPassword('password', 'confirm_password'));
    return group;
  }

}
