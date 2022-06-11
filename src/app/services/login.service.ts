import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  sendLoginDetails = new BehaviorSubject<any>(null);
  private loginStatus!: boolean;
  constructor(private http: HttpClient) { }

  getAuthStatus(){
    return this.loginStatus;
  }

  setAuthStatus(status: boolean){
    this.loginStatus = status;
  }

  login(user: any){
    if(user.username === 'admin' && user.password === 'password'){
      return this.http.get('assets/data/user.json');
    }else{
      return this.http.get('assets/user.json');
    }
  }
}
