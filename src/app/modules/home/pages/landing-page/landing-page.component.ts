import { Component, OnInit } from '@angular/core';
import { FEATURE_CONSTANTS } from '../../components/feature-section/feature-section.constants';
import { LANDING_CONSTANTS_EN, LANDING_CONSTANTS_ES } from './landing-page.constants';
import { Router } from '@angular/router';
import { LANG_CONSTANTS } from 'src/app/shared/constants/lang.constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constants: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.constants = { ...LANG_CONSTANTS, ...FEATURE_CONSTANTS }
    this.constants = this.router.url.includes('EN') ? { ...this.constants,  ...LANDING_CONSTANTS_EN } : { ...this.constants, ...LANDING_CONSTANTS_ES };
  }

}
