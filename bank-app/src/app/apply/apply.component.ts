import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BankService } from '../bank.service'
import { Router } from '@angular/router'
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  credits: any;
  
  constructor(private authService: AuthService, private bankService: BankService, private router: Router) { }

  ngOnInit(): void {
    this.bankService.getCredit().subscribe((res: any) => {
      console.log(res.result)
      this.credits = res.result
    })
  }
  addAmount = new FormGroup({
    amount: new FormControl('')
  })

  amount() {
    this.bankService.postCredit(this.addAmount.value).subscribe((res: any) => {
      console.log(res)

      this.addAmount.reset({})
      this.ngOnInit()
    })
  }





  logOut() {
    this.authService.logOut()
    this.router.navigate(['/login'])
  }

  getStatusClasses(item) {
    return {
      'credit-approved': item.status === 1,
      'credit-warning': item.status === 2,
      'credit-rejected': item.status === 3
    }
  }

  //const filterPipe = new FilterPipe();
  //const fiteredArr = filterPipe.transform(chkArray,txtSearch);
 
  
  
  








}
