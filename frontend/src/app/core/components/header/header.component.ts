import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '../../constants/const';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  account: any;

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.currentUser$.subscribe(user => {
      this.account = user || null;
    })
  }
  logOut(){
    this._authService.logout();
    this._router.navigate([ROUTE.LOGIN])
  }

}
