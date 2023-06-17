import { Component, Input } from '@angular/core';
import { LangOpt } from '../../interfaces/langOption.interface';
import { FooterSection } from '../../interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() languages: LangOpt[] = [];
  @Input() module!: FooterSection;
}
