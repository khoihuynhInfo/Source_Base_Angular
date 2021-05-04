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

}
