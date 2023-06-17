import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonlessHeaderComponent } from './components/buttonless-header/buttonless-header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LandingHeaderComponent } from './components/landing-header/landing-header.component';
import InputComponent from './components/forms/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/forms/error-message/error-message.component';
import { LangSelectorComponent } from './components/lang-selector/lang-selector.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonlessHeaderComponent,
    LogoComponent,
    LandingHeaderComponent,
    InputComponent,
    ErrorMessageComponent,
    LangSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ButtonlessHeaderComponent,
    FooterComponent,
    HeaderComponent,
    LandingHeaderComponent,
    InputComponent,
    LangSelectorComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
