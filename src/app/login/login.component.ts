import { Component, OnInit } from '@angular/core';
import {BankService} from '../bank.service'
import {FormGroup,FormControl} from '@angular/forms'
import {Router} from '@angular/router'
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private bankService:BankService, private router:Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }
  addLogin= new FormGroup({
    personal_id: new FormControl('')
  })



  addUser(){
    this.bankService.postLogin(this.addLogin.value).subscribe((res:any)=>{
      this.authService.setToken(res.token);
      this.router.navigate(['apply']);
    });
  }

}
