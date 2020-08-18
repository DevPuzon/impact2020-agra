import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from '../survey/survey.component';
import { FarmerMainComponent } from '../farmer-main/farmer-main.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import { NotificationComponent } from '../notification/notification.component';
import { CommunityComponent } from '../community/community.component';
import { ChatContentComponent } from '../chat-content/chat-content.component';


const routes: Routes = [
  {
    path:"survey",
    component:SurveyComponent
  },
  {
    path:"t",
    component:FarmerMainComponent,
    children:[
      {
        path:"account",
        component:AccountComponent
      },
      {
        path:"",
        component:AccountComponent
      },
      {
        path:"community",
        component:CommunityComponent
      },
      {
        path:"notification",
        component:NotificationComponent
      },
      {
        path:"chat",
        component:ChatComponent 
      },
      {
        path:"chat/:id",
        component:ChatContentComponent 
      },
      {
        path:"survey",
        component:SurveyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingRoutingModule { }
