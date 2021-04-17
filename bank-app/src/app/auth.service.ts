import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  constructor() { }

  setToken(inputToken) {
    this.token = inputToken;
    console.log(this.token)
    localStorage.setItem('token', this.token);
  }

  getToken() {
    return this.token ? this.token : localStorage.getItem('token') ? localStorage.getItem('token') : null
  }

  logOut() {
    this.token = null
    localStorage.removeItem('token')
  }

  isLogin() {
    return this.token || localStorage.getItem('token')
  }
  setHeader() {
    if (this.isLogin()) {
      return { 'Authorization': this.getToken() }
    } else {
      return {}
    }
  }


}
