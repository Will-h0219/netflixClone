import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, AUTO_STYLE } from '@angular/animations';
import { FaqItem } from '../../../interfaces/faqSection.interface';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss'],
  animations: [
    trigger('collapse', [
      state('open', style({
        height: AUTO_STYLE,
        visibility: AUTO_STYLE,
      })),
      state('close', style({
        height: '0',
        visibility: 'hidden'
      })),
      transition('open => close', animate('0.2s ease-out')),
      transition('close => open', animate('0.1s ease-in'))
    ])
  ]
})
export class FaqItemComponent {
  @Input() faq!: FaqItem;

  collapsed: boolean = true;

  collapseToggle(): void {
    this.collapsed = !this.collapsed;
  }
}
