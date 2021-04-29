import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _TOKEN } from '../constants/const';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  _token;

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._token = localStorage.getItem(_TOKEN) || null;
    if (this._token) {
      request = request.clone({
        setHeaders: {
          Authorization: this._token
        }
      });
    }
    return next.handle(request);
  }
}
