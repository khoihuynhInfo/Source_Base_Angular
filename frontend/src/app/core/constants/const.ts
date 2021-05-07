export const ROUTE = {
  HOME: '/',
  LOGIN: '/account/login'
};
export const API = {
  login: ''
};
export const STORAGE = {
  _TOKEN: '_token',
  _PERMS: '_permissions',
  _USER: '_currentUser'
};
export const PERMISSIONS = [
  {
    id: undefined,
    text: ''
  }
];
export const MENU = [
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
]
