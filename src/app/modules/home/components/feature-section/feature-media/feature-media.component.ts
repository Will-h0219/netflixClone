import { Component, Input } from '@angular/core';
import { FEATURE_CONSTANTS } from '../feature-section.constants';

@Component({
  selector: 'app-feature-media',
  templateUrl: './feature-media.component.html',
  styleUrls: ['./feature-media.component.scss']
})
export class FeatureMediaComponent {
  @Input() moduleId: string = '';
  @Input() media: any;

  constants = { ...FEATURE_CONSTANTS };
}
