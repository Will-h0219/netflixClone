import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonlessHeaderComponent } from './components/buttonless-header/buttonless-header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonlessHeaderComponent,
    LogoComponent,
    LandingHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonlessHeaderComponent,
    FooterComponent,
    HeaderComponent,
    LandingHeaderComponent
  ]
})
export class SharedModule { }
