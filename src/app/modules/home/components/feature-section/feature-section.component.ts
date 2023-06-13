import { Component, Input } from '@angular/core';
import { FEATURE_CONSTANTS } from './feature-section.constants';
import { FeatureSection } from '../../interfaces/featureSection.interface';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent {
  @Input() module: FeatureSection = {};

  constants = { ...FEATURE_CONSTANTS };
}
