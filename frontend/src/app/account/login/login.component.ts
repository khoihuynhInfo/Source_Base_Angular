import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/core/helpers/config.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private _configService: ConfigService) { }

  ngOnInit(): void {

  }

  initLogin() {
    if(this.validateBeforLogin()) {
      this.login();
    }
  }

  validateBeforLogin() {
    // if(!this.user.userName || this.user.userName == '') {
    //   this._toastr.error('Please enter Username');
    //   return false;
    // }
    // if(!this.user.password || this.user.password == '') {
    //   this._toastr.error('Please enter Password');
    //   return false;
    // }
    return true;
  }

  login() {
    // this._authService.login(this.user).subscribe(res => {
    //   console.log(res);
    //   this._router.navigate(['home']);
    // })
  }

}
