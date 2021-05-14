import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { AuthService } from './auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BankService {
  url = 'http://45.32.157.171:8200/api'
 
  constructor(private http: HttpClient, private authService:AuthService) { }


  postRegister(personal_id) {
    console.log('personal_id')
  return  this.http.post(`${this.url}/register`,personal_id)
  }
  postLogin(personal_id){
    return this.http.post(`${this.url}/login`,personal_id)
  }

  getCredit(){
    return this.http.get(`${this.url}/credit`,{ headers:this.authService.setHeader()})
  }

  postCredit(amount){
    return this.http.post(`${this.url}/credit`,amount,{ headers:this.authService.setHeader()})
  }


}

