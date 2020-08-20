import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModuleRoutingModule } from './auth-routing-module-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,  
    AuthRoutingModuleRoutingModule
  ]
})
export class AuthRoutingModuleModule { }
