import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { STORAGE } from 'src/app/core/constants/const';
import { ConfigService } from 'src/app/core/helpers/config.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: ''
  }

  constructor(private _router: Router, private _authService: AuthService, private _configService: ConfigService,
    private _toastr: ToastrService) { }

  ngOnInit(): void {

  }

  initLogin() {
    if(this.validateBeforLogin()) {
      this.login();
    }
  }

  validateBeforLogin() {
    if(!this.user.userName || this.user.userName == '') {
      this._toastr.error('Please enter Username');
      return false;
    }
    if(!this.user.password || this.user.password == '') {
      this._toastr.error('Please enter Password');
      return false;
    }
    return true;
  }

  login() {
    localStorage.setItem(STORAGE._TOKEN, 'TOKEN FAKE')
    this._router.navigate(['home']);
  }

}
