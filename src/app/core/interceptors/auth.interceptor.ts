import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../../modules/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>): HttpRequest<any> {
    if (!this.isSkippable(request.url) && this.authService.isAuthenticated) {
      const token = this.authService.token;
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return request;
  }

  private isSkippable(url: string) {
    const whiteListed = [];
    whiteListed.push('/api/auth*');

    return !!(whiteListed.find(x => url.search(x) !== -1));
  }
}
