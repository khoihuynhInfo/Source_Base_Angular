import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _TOKEN } from '../constants/const';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem(_TOKEN)) {
      request = request.clone({
        setHeaders: {
          Authorization: localStorage.getItem(_TOKEN)
        }
      });
    }
    return next.handle(request);
  }
}
