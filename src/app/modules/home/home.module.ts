import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileSelectionComponent } from './components/profile-selection/profile-selection.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { FeatureMediaComponent } from './components/feature-section/feature-media/feature-media.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { FaqItemComponent } from './components/faq-section/faq-item/faq-item.component';
import { GetStartedComponent } from './components/forms/get-started/get-started.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileSelectionComponent,
    ProfileCardComponent,
    LandingPageComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    FeatureMediaComponent,
    FaqSectionComponent,
    FaqItemComponent,
    GetStartedComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
