import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface LangOpt {
  label: string;
  path: string;
  signIn: string;
}

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.scss']
})
export class LangSelectorComponent implements OnInit {
  @Input() languages: LangOpt[] = [];
  @Input() selectedLang!: LangOpt;
  showLangOpts: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.selectedLang = this.languages.find(x => x.path === this.router.url) || this.languages[0];
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
