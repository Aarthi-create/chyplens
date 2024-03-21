import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.constants';
import { lastValueFrom, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  config: any = '';
  serverUrl: string = '';;
  urls: any = [];;
  constructor( private http: HttpClient) {
  this.config = AppConstants.SERVER_CONFIG;
    this.urls = [
      {'code': 'U', 'url': this.config.URL}
    ]
  }

  getURL(code: any) {
    return this.urls.filter((url: any)=> {
      return url['code'] == code
    })[0]['url']
  }

  post(url: string, body = <any>{}, {params = {}, headers = {}}: {params?: any, headers?: any} = {} ): Promise<any> {
    let serverUrl = this.config.URL;
    let result: Promise<object> = lastValueFrom(this.http.post(serverUrl + url, body,{params, headers})).then(this.extractData).catch(this.handleError);

    return result;
  }

  delete(url: string, {params = {}, headers = {}}: {params?: any, headers?: any} = {}) {
    let serverUrl = this.config.URL;
    let result: Promise<object> = lastValueFrom(this.http.delete(serverUrl + url, {params, headers})).then(this.extractData).catch(this.handleError);

    return result;
  }

  get(url: string, plainText: any = '', {params = {}, headers = {}}: {params?: any, headers?: any} = {}) {
    let serverUrl = this.config.URL;
    let result: Promise<any> = lastValueFrom(this.http.get(serverUrl + url + plainText, {params, headers})).then(this.extractData).catch(this.handleError);
    // let result: any = this.http.get(serverUrl + url + plainText, {params, headers});
    // return this.http
    //   .get(serverUrl + url, {params, headers})
    //   .toPromise()
    //   .then(this.extractData)
    //   .catch(this.handleError);
    return result;
  }

  put(url: string, body = <any>{}, {params = {}, headers = {}}: {params?: any, headers?: any} = {}) {
    let serverUrl = this.config.URL;
    let result: Promise<object> = lastValueFrom(this.http.put(serverUrl + url, body, {params, headers})).then(this.extractData).catch(this.handleError);

    return result;
  }

  patch(url: string, body = <any>{}, {params = {}, headers = {}}: {params?: any, headers?: any} = {}) {
    let serverUrl = this.config.URL;
    let result: Promise<object> = lastValueFrom(this.http.patch(serverUrl + url, body, {params, headers})).then(this.extractData).catch(this.handleError);

    return result;
  }

  private extractData(res: any) {
    const body = res;
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.error || error);
  }
}

