import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'co', component: LandingPageComponent, data: { test: '01' } },
      { path: 'co-EN', component: LandingPageComponent },
      { path: 'browse', component: HomeComponent },
      { path: '', redirectTo: 'co', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
