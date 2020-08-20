import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovroutingRoutingModule } from './govrouting-routing.module';
import { FarmerApplicantsComponent } from '../farmer-applicants/farmer-applicants.component';
import { MonitoringComponent } from '../monitoring/monitoring.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AccountComponent } from 'src/app/FarmersModule/account/account.component';
import { GovMainComponent } from '../gov-main/gov-main.component';
import { DashboardLguComponent } from '../dashboard-lgu/dashboard-lgu.component';


@NgModule({
  declarations: [FarmerApplicantsComponent,DashboardLguComponent
  ,MonitoringComponent,GovMainComponent],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    IonicModule, 
    GovroutingRoutingModule
  ]
})
export class GovroutingModule { }
