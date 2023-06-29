import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, AUTO_STYLE } from '@angular/animations';
import { FaqItem } from '../../../interfaces/faqSection.interface';
import { CollapsibleService } from './../../../../../shared/services/collapsible/collapsible.service';
import { Subscription } from 'rxjs';

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
export class FaqItemComponent implements OnInit, OnDestroy {
  @Input() faq!: FaqItem;

  collapsed: boolean = true;
  colapsibleSubscription!: Subscription;

  constructor(private collapsibleService: CollapsibleService) { }
  
  ngOnInit(): void {
    this.colapsibleSubscription = this.collapsibleService.currentItem$.subscribe({
      next: (value) => {
        if (value.id !== this.faq.id && value.isOpen && !this.collapsed) {
          this.collapsed = !this.collapsed;
        }
      }
    });
  }
  
  ngOnDestroy(): void {
    this.colapsibleSubscription.unsubscribe();
  }
  
  collapseToggle(): void {
    this.collapsed = !this.collapsed;
    this.collapsibleService.setCurrentItem({
      id: this.faq.id,
      isOpen: !this.collapsed
    });
  }
}
