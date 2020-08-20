import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'agra',
    pathMatch: 'full'
  },
  {
    path:'agra',
    component:LandingPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./AuthModule/auth-routing-module/auth-routing-module.module').then( m => m.AuthRoutingModuleModule)
  },
  {
    path: 'farmer',
    loadChildren: () => import('./FarmersModule/farmers-routing/farmers-routing.module').then( m => m.FarmersRoutingModule)
  },
  {
    path: 'gov-lgu',
    loadChildren: () => import('./GovLguModule/govrouting/govrouting.module').then( m => m.GovroutingModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
