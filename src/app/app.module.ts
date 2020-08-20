import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GatepageComponent } from './gatepage/gatepage.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [AppComponent,LandingPageComponent,
    GatepageComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
      AppRoutingModule,
      FormsModule,  
      HttpClientModule, 
      ReactiveFormsModule, ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
