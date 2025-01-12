import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerService {
  config: { SUCCESS_STATUS: string; FAILURE_STATUS: string; RESPONSE_CODES: {}; };
  responseCodes: {};

  constructor() { 
    this.config = AppConstants.RESPONSE_HANDLER_CONFIG;
    this.responseCodes = this.config.RESPONSE_CODES;
  }

  handleResponse(responseEvent: any) {
    if (responseEvent.status === this.config.SUCCESS_STATUS) {
      return;
    } else if (responseEvent.status === this.config.FAILURE_STATUS) {
      // TODO: Handle failure response
    }
  }
}
