import { Component, Input, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from '../../../../../shared/custom-validators/email.validator';
import { GetStarted } from '../../../interfaces/heroSection.interface';
import { Router } from '@angular/router';

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

  constructor (private fb: FormBuilder,
    private router: Router,
    private renderer: Renderer2) { }

  showError() {
    return !this.getStartedForm.controls['email'].valid && this.getStartedForm.controls['email'].dirty;
  }

  getStarted() {
    if (this.getStartedForm.invalid) {
      this.renderer.selectRootElement(`#${this.getStartedContent.inputCta.name}`).focus();
      return;
    }
    console.log(this.getStartedForm.value);
    this.router.navigateByUrl('/browse', { state: { email: this.getStartedForm.controls['email'].value } })
  }
}
