import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModuleRoutingModule } from './auth-routing-module-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModuleRoutingModule
  ]
})
export class AuthRoutingModuleModule { }
