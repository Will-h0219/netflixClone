import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSelectionComponent } from './components/profile-selection/profile-selection.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingGetStartedComponent } from './components/landing-get-started/landing-get-started.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileSelectionComponent,
    ProfileCardComponent,
    LandingPageComponent,
    LandingGetStartedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
