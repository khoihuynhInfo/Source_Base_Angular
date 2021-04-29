import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { ROUTE, _TOKEN } from '../constants/const';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  TOKEN
  constructor(
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const token = localStorage.getItem(_TOKEN) || null;
    if (token) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate([ROUTE.LOGIN]);
    return false;
  }

}
