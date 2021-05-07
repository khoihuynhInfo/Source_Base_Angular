import { Injectable } from '@angular/core';
import { DataService } from './http-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API, STORAGE } from '../constants/const';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private _tokenSubject: BehaviorSubject<string> = new BehaviorSubject(null);
  private _currentUserSubject: BehaviorSubject<object> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
    if (localStorage.getItem(STORAGE._USER)) {
      const userJson = JSON.parse(localStorage.getItem(STORAGE._USER));
      this._currentUserSubject.next(userJson);
    }
    if (localStorage.getItem(STORAGE._TOKEN)) {
      const token = localStorage.getItem(STORAGE._TOKEN);
      this._tokenSubject.next(token);
    }
  }

  get token(): string {
    return this._tokenSubject.value;
  }

  set token(token: string) {
    this._tokenSubject.next(token);
  }

  get currentUser(): any {
    return this._currentUserSubject.value;
  }

  set currentUser(user: any) {
    user = user || null;
    this._currentUserSubject.next(user);
  }

  get currentUser$(): Observable<any> {
    return this._currentUserSubject.asObservable();
  }

  login(params): Observable<any> {
    return this.dataService.post(API.login, params).pipe(
      tap((res) => {
        this._setLoginLocalStogare(res);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(STORAGE._TOKEN);
    localStorage.removeItem(STORAGE._USER);
    localStorage.removeItem(STORAGE._PERMS);
    this._tokenSubject.next(null);
    this._currentUserSubject.next(null);
  }

  _setLoginLocalStogare(apiRes: any): void {
    localStorage.setItem(STORAGE._TOKEN, JSON.stringify(apiRes?.token));
    localStorage.setItem(STORAGE._USER, JSON.stringify(apiRes?.user));
    this._currentUserSubject.next(apiRes?.user)
    this._tokenSubject.next(apiRes?.token);
  }
}

