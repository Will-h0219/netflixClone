import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSelectionComponent } from './components/profile-selection/profile-selection.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileSelectionComponent,
    ProfileCardComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
