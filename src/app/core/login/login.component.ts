import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormDetails: FormGroup = new FormGroup({})
  enableEmailPart:boolean = true
  enableImagePart:boolean = false
  enablePasswordPart:boolean = false
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  initialiseForm(res?:any){
    this.loginFormDetails = new FormGroup({
      email : new FormControl(res ? res.email :""),
      passcode : new FormControl(res ? res.passcode:""),
      sceretcode: new  FormControl(res ? res.sceartcode:"")
    })
  }
  checkEmail(){
    this.enableImagePart= true;
    this.enablePasswordPart = false
    this.enableEmailPart = false
  }
  verifyImage(){
    this.enableImagePart= false;
    this.enablePasswordPart = true
    this.enableEmailPart = false
  }
  login(){
    console.log('hii');
    this.router.navigate(['/beneficary-instruction',]);
  }
}
