import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PERMISSIONS, STORAGE } from '../constants/const';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _perms: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() { }

  set perms_list(permissions: any) { // permissions: List Permissions = []
    this._perms.next(permissions);
  }

  get perms_list() {
    return this._perms.value;
  }

  fetchPermsList() {
    this.perms_list = []; // List Permissions
  }
  savePermsStorage(permissions: any) {
    let permId = []; // List permissions id
    let keys = Object.keys(PERMISSIONS); // []
    for (let perms of permissions) {
      for (let i of keys) {
        if (perms && PERMISSIONS[i]) {
          if (perms == PERMISSIONS[i].text) {
            permId.push(PERMISSIONS[i].id);
          }
        }
      }
    }
    localStorage.setItem(STORAGE._PERMS, JSON.stringify(permId))
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test((String(email).trim()).toLowerCase())) {
      return false;
    }
    return true;
  }
  validateNumber(number: any) {
    let reNum = /^[0-9]*$/;
    if (!reNum.test(number)) {
      return false;
    }
    return true;
  }
  capitalizeLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
  }

}
