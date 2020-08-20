import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GovMainComponent } from '../gov-main/gov-main.component';
import { MonitoringComponent } from '../monitoring/monitoring.component';
import { FarmerApplicantsComponent } from '../farmer-applicants/farmer-applicants.component';
import { AccountComponent } from 'src/app/FarmersModule/account/account.component';
import { DashboardLguComponent } from '../dashboard-lgu/dashboard-lgu.component';
import { GatepageComponent } from '../../gatepage/gatepage.component';


const routes: Routes = [ 
  {
    path:"t",
    component:GovMainComponent,
    children:[
      {
        path:"monitoring",
        component:MonitoringComponent
      },
      {
        path:"",
        component:MonitoringComponent
      },
      {
        path:"dashboard-lgu",
        component:DashboardLguComponent
      },
      {
        path:"farmer-applicant",
        component:FarmerApplicantsComponent
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovroutingRoutingModule { }
