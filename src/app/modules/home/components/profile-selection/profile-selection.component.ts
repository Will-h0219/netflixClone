import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-profile-selection',
  templateUrl: './profile-selection.component.html',
  styleUrls: ['./profile-selection.component.scss'],
  animations: [
    trigger('zoom', [
      state('zoomIn', style({
        transform: 'scale(1.15)',
        opacity: 0
      })),
      state('zoomOut', style({
        transform: 'scale(1)',
        opacity: '1'
      })),
      transition('zoomIn => zoomOut', [
        animate('.3s')
      ])
    ])
  ]
})
export class ProfileSelectionComponent implements AfterViewInit {
  zoomIn: boolean = true;

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.zoomIn = false;
    this.cdr.detectChanges();
  }
}
