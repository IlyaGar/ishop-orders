import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieModel } from '../models/cookie-model';

@Injectable({
  providedIn: 'root'
})
export class CookieOrdersService {

  readonly cookieName = "ishop-orders-list";

  constructor(
    private cookieService: CookieService,
  ) { }

  setCookie(login: CookieModel) {
    let loginJson = JSON.stringify(login);
    this.cookieService.set(this.cookieName, loginJson, 365);
  }

  getShop() : string {
    try {
      if(this.cookieService.check(this.cookieName)){
        let fullData = this.cookieService.get(this.cookieName);
        let loginFromCookie = JSON.parse(fullData);
        if(loginFromCookie) {
          return loginFromCookie.id;
        }
      }
      else return '';
    }
    catch(error) {
      console.error();
      alert('login error')
    }
  }
}