import { Component, OnInit } from '@angular/core';
import {BankService} from '../bank.service'
import {FormGroup,FormControl} from '@angular/forms'
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addRegister= new FormGroup({
    personal_id: new FormControl('')
  })

  constructor(private bankService:BankService, private router:Router) { }

  ngOnInit(): void {
  }
  addUser(){
    this.bankService.postRegister(this.addRegister.value).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['login'])
    })
  }

}
