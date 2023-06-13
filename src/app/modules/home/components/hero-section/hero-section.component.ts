import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from 'src/app/shared/custom-validators/email.validator';
import { HeroSectionModule } from '../../interfaces/heroSection.interface';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Input() module: HeroSectionModule = {};

  getStartedForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, validateEmail()]]
  });

  constructor (private fb: FormBuilder) { }

  showError() {
    return !this.getStartedForm.controls['email'].valid && this.getStartedForm.controls['email'].dirty;
  }

  getStarted() {
    console.log(this.getStartedForm.value);
  }
}
