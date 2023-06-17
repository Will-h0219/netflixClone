import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LangOpt } from '../../interfaces/langOption.interface';

@Component({
  selector: 'app-landing-header',
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss']
})
export class LandingHeaderComponent implements OnInit {
  @Input() languages: LangOpt[] = [];
  signIn: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const { signIn } = this.languages.find(x => x.path === this.router.url) || this.languages[0];
    this.signIn = signIn;
  }
}
