import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {ApplyComponent} from './apply/apply.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [{
  component: LoginComponent,
  path:'login'
},
{
  component: RegisterComponent,
  path:'register'
},
{
  component:ApplyComponent,
  path:'apply',
  canActivate:[AuthGuard]
},
  {
    component: HomeComponent,
    path:''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
