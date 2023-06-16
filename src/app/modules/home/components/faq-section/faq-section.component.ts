import { Component, Input } from '@angular/core';
import { FaqSection } from '../../interfaces/faqSection.interface';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.scss']
})
export class FaqSectionComponent {
  @Input() module!: FaqSection;
}
