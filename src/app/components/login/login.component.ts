import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  login(){
  this.submitted = true;
  if(this.loginForm.valid){
    this.loginService.login(this.loginForm.value).subscribe((val: any)=>{
      localStorage.setItem('userInfo', JSON.stringify(val));
      localStorage.setItem('isLoggedIn', "true");
      localStorage.setItem('token', val.token);
      this.router.navigateByUrl('dashboard')
    })
  }
  }
}
