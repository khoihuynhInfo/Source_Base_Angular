import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE } from '../../constants/const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  logOut(){
    localStorage.clear();
    this._router.navigate([ROUTE.LOGIN])
  }

}
