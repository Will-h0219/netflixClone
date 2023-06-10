import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ButtonlessHeaderComponent } from './components/buttonless-header/buttonless-header.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonlessHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonlessHeaderComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class SharedModule { }
