import { Component, OnInit } from '@angular/core';
import { FEATURE_CONSTANTS } from '../../components/feature-section/feature-section.constants';
import { LANDING_CONSTANTS_EN, LANDING_CONSTANTS_ES } from './landing-page.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constants = { ...FEATURE_CONSTANTS, ...LANDING_CONSTANTS_ES };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // TODO: Settear de acuerdo al routing?
    this.constants = this.router.url.includes('EN') ? { ...this.constants, ...LANDING_CONSTANTS_EN } : { ...this.constants, ...LANDING_CONSTANTS_ES };
  }

}
