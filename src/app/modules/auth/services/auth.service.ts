import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {BehaviorSubject, lastValueFrom, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import ls from 'localstorage-slim';
import {AuthCredential} from '../../../shared/interfaces/auth-credential';
import {Router} from '@angular/router';


const API_URL = environment.apiUrl;
const CLIENT_ID = environment.oAuthClientId;
const CLIENT_SECRET = environment.oAuthClientSecret;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string | null = null;
  public isAuthenticated: boolean = false;
  public authStatusObserver: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  private tokenTimer: any;   // Timeout

  constructor(private http: HttpClient, private router: Router) {}

  public signUp(signUpForm: FormGroup): Observable<any> {
    return this.http.post(API_URL + '/users/', signUpForm.getRawValue());
  }

  public signIn(data: {username: string; password: string}, redirectUrl?: string): void {
    this.requestForToken(data.username, data.password).subscribe({
      next: (data) => {
        this.setCredential(data);
        this.updateStatus(data, true);
        this.router.navigate([redirectUrl || '/'])
      },
      error: err => console.log(err)
    });
  }

  public signOut(): void {
    let credential = this.getCredential();
    if (credential?.access_token) {
      this.requestForRevokeToken(credential.access_token).subscribe();
    }
    this.removeCredential();
    this.updateStatus(null, false);
    this.router.navigate(['/'], {queryParams: {message: 'sign-out'}});
  }

  public async validateCredentialIfFound(): Promise<boolean> {
    const credential = this.getCredential();
    if (credential && credential.access_token && credential.expiration_date > new Date()) {
      return true;
    } else if (credential && credential.refresh_token) {
      try {
        const refreshTokenResponse = await this.requestForTokenByRefreshToken(credential.refresh_token);
        this.setCredential(refreshTokenResponse);
        return true;
      } catch (e: any) {
        return false;
      }
    }
    return false;
  }

  private requestForToken(username: string, password: string): Observable<AuthCredential> {
    const formData = new FormData();
    formData.append('client_id', CLIENT_ID);
    formData.append('client_secret', CLIENT_SECRET);
    formData.append('grant_type', 'password');
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post<AuthCredential>(API_URL + '/auth/token/', formData);
  }

  private requestForTokenByRefreshToken(refreshToken: string): Promise<AuthCredential> {
    const formData = new FormData();
    formData.append('client_id', CLIENT_ID);
    formData.append('client_secret', CLIENT_SECRET);
    formData.append('grant_type', 'refresh_token');
    formData.append('refresh_token', refreshToken);
    return lastValueFrom(this.http.post<AuthCredential>(API_URL + '/auth/token/', formData));
  }

  private requestForRevokeToken(revokeToken: string): Observable<any> {
    const formData = new FormData();
    formData.append('client_id', CLIENT_ID);
    formData.append('token', revokeToken);
    return this.http.post<any>(API_URL + '/auth/revoke_token/', formData);
  }

  private updateStatus(credential: AuthCredential | null, authenticated: boolean): void {
    if (authenticated && credential) {
      this.token = credential.access_token;
      this.isAuthenticated = true;
      this.authStatusObserver.next(true);
      this.setAuthTimer(credential.expiration_date);
    } else {
      this.token = null;
      this.isAuthenticated = false;
      this.authStatusObserver.next(false);
      this.tokenTimer.clearTimeout();
    }
  }

  private setAuthTimer(expiration: Date) {
    const nextExpiration = expiration.getTime() - new Date().getTime();
    this.tokenTimer = setTimeout(() => {
    }, nextExpiration);
  }

  private setCredential(credential: AuthCredential): void {
    credential.expiration_date = new Date(new Date().getTime() + credential.expires_in * 1000);
    ls.set('auth', credential, {encrypt: true});
  }

  private getCredential(): AuthCredential | null {
    let auth = ls.get<AuthCredential>('auth', {decrypt: true});
    if (!auth || !auth.access_token || !auth.expiration_date) {
      return null;
    }
    if (auth.expiration_date) {
      auth.expiration_date = new Date(auth.expiration_date);    // Date stores in ISO String
    }
    return auth;
  }

  private removeCredential(): void {
    ls.remove('auth');
  }

}
