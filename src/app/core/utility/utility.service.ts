import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UtilityFunctions {

  constructor(
    public router: Router
  ) {
  }

  searchObject(obj: any){
    this.checkObjectValue(obj);
    var str = "";
    for (var key in obj) {
        if (str != "") {
            str += ";";
        }
        str += key + "=" + obj[key];
    }
    return str;
  }

  checkObjectValue(obj: any) {
    for (var propName in obj) { 
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] == '') {
        delete obj[propName];
      }
    }
  }

  // handleResponseError(err, from_project = false) {
  //   if (err.error && err.error.errors && err.error.errors.length > 0) {
  //     this._snack.showSnackBar(err.error.errors[0].error, 'Ok');
  //     return;
  //   }
  //   if (err.errors && err.errors.length > 0) {
  //     if(err.code == AppConstants.RESPONSE_HANDLER_CONFIG.RESPONSE_CODES.CONFLICT ||
  //        (from_project && (err['code'] === AppConstants.RESPONSE_HANDLER_CONFIG.RESPONSE_CODES.RESOURCE_UNAVAILABLE_ERROR_CODE))) {
  //       const dialogRef = this.dialog.open(ModalDialogComponent, {
  //         width: '500px',
  //         panelClass: 'email-window-dialog',
  //         data: {
  //           message: err['errors'][0]['error'],
  //           noCancel: true,
  //           from_project : from_project,
  //           errors : from_project && (err['code']) === AppConstants.RESPONSE_HANDLER_CONFIG.RESPONSE_CODES.RESOURCE_UNAVAILABLE_ERROR_CODE ? err['errors'] : []
  //         },
  //       });
  //       dialogRef.disableClose = true;
  //       return;
  //     } else {
  //       this._snack.showSnackBar(err['errors'][0]['error'], 'Ok');
  //       return;
  //     }
  //   }
  //   if (err && err.message) {
  //     this._snack.showSnackBar(err.message, 'Ok');
  //     return;
  //   }
  //   if (err && err[0] && err[0].message) {
  //     this._snack.showSnackBar(err[0].message, 'Ok');
  //     return;
  //   }
  //   this._snack.showSnackBar('Sorry, Unable to process the request', 'OK');
  // }
  validateText(str: string, length?: undefined, maxLength?: undefined, fixedLength?: undefined): boolean {
    str = str ? str.toString() : '';
    if (str) {
      if (!str.trim() || str.trim() === '' || (length && str.length < (length)) || (maxLength && str.length > (maxLength)) || (fixedLength && str.length != (fixedLength)) ) {
        return false;
      }
      return true;
    }
    return false;
  }
  public emailValidator = function (control: FormControl) {
    const email = control.value;
    // const reg = /^([a-z0-9_\-\.]+)@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i;
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email && !reg.test(email)) {
      return {
        email: 'Please enter a valid email'
      };
    }
    return null;
  };

  public requiredValidator (fieldName: string = '', type: 'select' | 'input' = 'input') {
    return (control: any) => {
      const name = control.value;
      if (!name || !this.validateText(name)) {
        if (type === 'select') {
          return {
            // required: 'Please select ' + fieldName
          };
        } else {
          return {
            // required: 'Please enter ' + fieldName
          };
        }
      }
      return null;
    };
  }
  onlyNumbersAllowed(event:any){
    const charCode=(event.which)? event.which : event.keyCode;
    if(charCode >31 &&(charCode < 48 || charCode >57)){
      return false;
    }
    return true;
  }
  alphaNumeric(event:any){
    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  alphaNumericWithSpecialChar(event:any){
    var inp = String.fromCharCode(event.keyCode);
    if (/^[a-zA-Z0-9 ‘’`'",:/\\\\\[\\\](){}?\\\\|,<>;:!~*_@#$%^&+=\-]*$/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}

