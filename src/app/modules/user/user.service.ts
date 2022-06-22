import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthService} from "../auth/auth.service";


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getProfile(): Observable<any> {
    return this.http.get(API_URL + '/user-profile/', {headers: {'Authorization': 'Bearer ' + this.authService.token}});
  }
}
