import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AppConstants } from "../constants/app.constants";

@Injectable({
  providedIn: "root",
})
export class AppService {
  defaultExpiry = AppConstants.COOKIE_CONFIG.EXPIRES_IN;
  constructor(
    private cookieService: CookieService,
    public router: Router,
  ) {}

  setObjectWithKeys(data: any) {
    Object.keys(data).forEach((key) => {
      this.setItem(key, data[key]);
    });
  }

  setItem(key: any, val: any, expiry?: any) {
    const exdate = new Date();
    exdate.setDate(exdate.getDate() + (expiry ? expiry : this.defaultExpiry));
    this.cookieService.set(
      key,
      this.encode(val),
      exdate,
      "/",
      AppConstants.COOKIE_CONFIG.DOMAIN,
      false,
      "Strict"
    );
  }

  getItem(key: any) {
    if (this.cookieService.get(key)) {
      return this.decode(this.cookieService.get(key));
    } else {
      return "";
    }
  }

  encode(val: any) {
    let str;
    if (this.isArray(val) || this.isObject(val)) {
      str = JSON.stringify(val);
    } else {
      str = val;
    }
    return btoa(str);
    // return Buffer.from(str, 'binary').toString('base64');
  }

  decode(val: any) {
    return atob(val);
    // return Buffer.from(val, 'base64').toString('binary');
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  isObject(obj: any) {
    return !!obj && obj.constructor === Object;
  }

  isAuthenticated(): boolean {
    return <boolean>this.checkExistingCookie();
  }

  checkExistingCookie(
    key: string = AppConstants.AUTH_CONFIG.AUTH_TOKEN_STORED_AS
  ): boolean | string {
    return this.cookieService.check(key) && this.cookieService.get(key);
  }

  clearAll() {
    this.cookieService.deleteAll("/", AppConstants.COOKIE_CONFIG.DOMAIN);
  }
}