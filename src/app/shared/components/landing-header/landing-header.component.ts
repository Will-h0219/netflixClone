import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent {
  showLangOpts: boolean = false;
  languages: string [] = [ 'Español', 'English' ];
  selectedLang: string = this.languages[0];

  toggleLangs(): void {
    this.showLangOpts = !this.showLangOpts;
  }

  setLang(option: string): void {
    this.selectedLang = option;
    this.showLangOpts = false;
  }
}
