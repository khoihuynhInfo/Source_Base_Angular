import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTE, _TOKEN } from '../constants/const';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem(_TOKEN) || null;
    if (token) {
      const returnUrl = next.queryParams.returnUrl || ROUTE.HOME;
      this.router.navigate([returnUrl]);
      return false;
    }
    return true;
  }
}
