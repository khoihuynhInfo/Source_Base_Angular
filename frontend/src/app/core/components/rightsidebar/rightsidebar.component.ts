import { Component, OnInit } from '@angular/core';
import { ROUTE } from '../../constants/const';

@Component({
  selector: 'app-rightsidebar',
  templateUrl: './rightsidebar.component.html',
  styleUrls: ['./rightsidebar.component.scss']
})
export class RightsidebarComponent implements OnInit {

  public menus: Array<any> = [
    {
      name: 'Home',
      icon: 'nav-icon fas fa-tachometer-alt',
      route: '',
      perms: [],
    },
    {
      name: 'Item 2',
      icon: 'nav-icon fas fa-users',
      perms: [],
      childs: [
        {
          name: 'Sub Item 1',
          route: '2',
          perms: [],
        }
      ],
    },
    {
      name: 'Item 3',
      icon: 'nav-icon fas fa-tachometer-alt',
      route: '3',
      perms: [],
    },
  ];

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
