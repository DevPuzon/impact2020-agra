import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GovMainComponent } from '../gov-main/gov-main.component';
import { MonitoringComponent } from '../monitoring/monitoring.component';
import { FarmerApplicantsComponent } from '../farmer-applicants/farmer-applicants.component';
import { AccountComponent } from 'src/app/FarmersModule/account/account.component';


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
