import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingRoutingModule } from './farmers-routing-routing.module';
import { SurveyComponent } from '../survey/survey.component';
import { FarmerMainComponent } from '../farmer-main/farmer-main.component';
import { AccountComponent } from '../account/account.component';
import { ChatComponent } from '../chat/chat.component';
import { NotificationComponent } from '../notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommunityComponent } from '../community/community.component';
import { ChatContentComponent } from '../chat-content/chat-content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,  
    FarmersRoutingRoutingModule
  ], 
  declarations: [ChatContentComponent,
    CommunityComponent,SurveyComponent,FarmerMainComponent
  ,AccountComponent,NotificationComponent,ChatComponent]
})
export class FarmersRoutingModule { }
