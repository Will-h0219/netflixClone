import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LANDING_CONSTANTS } from './landing-header.constants';

interface LangOpt {
  label: string;
  path: string;
  signIn: string;
}

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  constants = { ...LANDING_CONSTANTS };
  languages: LangOpt[] = this.constants.laguages;
  showLangOpts: boolean = false;
  selectedLang!: LangOpt;
  signIn: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedLang = this.languages.find(x => x.path === this.router.url) || this.languages[0];
    this.signIn = this.selectedLang.signIn;
  }

  toggleLangs(): void {
    this.showLangOpts = !this.showLangOpts;
  }

  setLang(option: LangOpt): void {
    this.selectedLang = option;
    this.showLangOpts = false;
    this.router.navigateByUrl(option.path);
  }
}
