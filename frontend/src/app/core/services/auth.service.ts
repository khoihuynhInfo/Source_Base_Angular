import { Injectable } from '@angular/core';
import { DataService } from './http-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { STORAGE } from '../constants/const';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private _tokenSubject: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private dataService: DataService) {
    if (localStorage.getItem(STORAGE._TOKEN)) {
      const token = JSON.parse(localStorage.getItem(STORAGE._TOKEN));
      this._tokenSubject.next(token);
    }
  }

  get token(): string {
    return this._tokenSubject.value;
  }

  set token(token: string) {
    this._tokenSubject.next(token);
  }

  login(params): Observable<any> {
    return this.dataService.post('', params).pipe(
      tap((res) => {
        console.log(res);
        this._setLoginLocalStogare(res);
      }),
    );
  }

  logout(): void {
    // logout the user
    localStorage.removeItem(STORAGE._TOKEN);
    location.reload();
  }

  _setLoginLocalStogare(apiRes: any): void {
    console.log(apiRes);
    localStorage.setItem(STORAGE._TOKEN, JSON.stringify(apiRes.token));
    this._tokenSubject.next(apiRes.token);
  }

}

