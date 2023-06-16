import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from '../../../../../shared/custom-validators/email.validator';
import { GetStarted } from '../../../interfaces/heroSection.interface';

@Component({
  selector: 'app-get-started-form',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {
  @Input() getStartedContent!: GetStarted;

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
