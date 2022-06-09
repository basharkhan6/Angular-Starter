import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signUpUser(signUpForm: FormGroup): Observable<any> {
    return this.http.post(API_URL + '/users/', signUpForm.getRawValue());
  }
}
