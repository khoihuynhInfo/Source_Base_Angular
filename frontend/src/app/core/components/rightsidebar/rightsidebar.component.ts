import { Component, OnInit } from '@angular/core';
import { MENU, ROUTE } from '../../constants/const';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {

  public menus: Array<any> = [...MENU];

  constructor() { }

  ngOnInit(): void {
  }
  getClassActive(menuChild: any): boolean {
    let url = window.location;
    let index = menuChild.findIndex(
      (e: any) => url.pathname.search('/' + e.route) !== -1
    );
    if (index != -1) {
      return true;
    }
    return false;
  }

}
