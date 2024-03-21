import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, finalize, tap } from "rxjs/operators";
import { AppConstants } from "../constants/app.constants";
import { AppService } from "../services/app.service";
import { Router } from "@angular/router";
import { ResponseHandlerService } from "../response-handler/response-handler.service";

@Injectable({
  providedIn: "root",
})
export class IntercecptorService {
  excludeRoutes: any = "";
    
    constructor(private appService: AppService, private router: Router, private responseHandler: ResponseHandlerService) {
    this.excludeRoutes = AppConstants.INTERCEPTOR_CONFIG.EXCLUDE_ROUTES.slice();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let clone = req;
    // let server = this.startsWithAny(req.url, [this.config.URL]) ? this.config.URL : this.config.UMS_URL;
    // const url = req.url.replace(server, '');
    let urlContains = clone.url.includes(AppConstants.INTERCEPTOR_CONFIG.EXCLUDE_ROUTES)
    let httpHeader;
    if (!urlContains) {
      httpHeader = new HttpHeaders()
        .set(
          AppConstants.AUTH_CONFIG.AUTH_HEADER_KEY,
          "Bearer " +
            this.appService.getItem(
              AppConstants.AUTH_CONFIG.AUTH_TOKEN_STORED_AS
            )
        )
        .set(
          AppConstants.AUTH_CONFIG.AUTH_APP_ID,
          AppConstants.AUTH_CONFIG.AUTH_APP_VALUE
        )
        .set(
          AppConstants.AUTH_CONFIG.AUTH_API_VERSION,
          AppConstants.AUTH_CONFIG.AUTH_API_VERSION_VALUE
        )
        .set(
          AppConstants.AUTH_CONFIG.AUTH_APP_TYPE,
          AppConstants.AUTH_CONFIG.AUTH_APP_TYPE_VALUE
        );
    } else {
      httpHeader = new HttpHeaders()
        .set(
          AppConstants.AUTH_CONFIG.AUTH_APP_ID,
          AppConstants.AUTH_CONFIG.AUTH_APP_VALUE
        )
        .set(
          AppConstants.AUTH_CONFIG.AUTH_API_VERSION,
          AppConstants.AUTH_CONFIG.AUTH_API_VERSION_VALUE
        )
        .set(
          AppConstants.AUTH_CONFIG.AUTH_APP_TYPE,
          AppConstants.AUTH_CONFIG.AUTH_APP_TYPE_VALUE
        );
    }
    clone = req.clone({ headers: httpHeader });
    return next.handle(clone).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          this.responseHandler.handleResponse(evt);
        }
      }),
      finalize(() => {}),
      catchError((error: any) => {
        // const url = req.url.replace(server, '');
        // if (error['status'] == 401 && !this.startsWithAny(url, this.excludeRoutes)) {
        //   let userName = this.localStorage.getItem(AppConstants.AUTH_CONFIG.USER_NAME_KEY);
        //   let rememberMe = this.localStorage.getItem(AppConstants.AUTH_CONFIG.REMEMBER_ME);
        //   let password = this.localStorage.getItem(AppConstants.AUTH_CONFIG.PASSWORD_KEY);
        //   this.localStorage.clear(localStorage);
        //   this.localStorage.clear(sessionStorage);
        //   this.appService.clear();
        //   this.modalService.dismissAll();
        //   this.router.navigateByUrl('/login').finally(() => {
        //     this.localStorage.setItem(AppConstants.AUTH_CONFIG.USER_NAME_KEY, userName);
        //     this.localStorage.setItem(AppConstants.AUTH_CONFIG.PASSWORD_KEY, password);
        //     this.localStorage.setItem(AppConstants.AUTH_CONFIG.REMEMBER_ME, rememberMe);
        //     this.toastService.showSnackBar('Session Expired');
        //   });
        // } else  {
        return Promise.reject(error.error || error.message || error);
        // }
      })
    );
  }

  startsWithAny(str: string, substrings: Array<any>): boolean {
    return substrings.some(function (v) {
      return str.startsWith(v);
    });
  }
}
