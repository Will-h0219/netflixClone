import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from 'src/app/shared/custom-validators/email.validator';

@Component({
  selector: 'app-landing-get-started',
  templateUrl: './landing-get-started.component.html',
  styleUrls: ['./landing-get-started.component.scss']
})
export class LandingGetStartedComponent {
  getStartedForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, validateEmail()]]
  });

  inputCta = {
    name: 'email',
    label: 'Email',
    placeholder: 'Email'
  }

  errorMessages = {
    required: 'El email es obligatorio.',
    invalidEmail: 'Escribe una dirección de email válida.'
  }

  constructor (private fb: FormBuilder) { }

  showError() {
    return !this.getStartedForm.controls['email'].valid && this.getStartedForm.controls['email'].dirty;
  }

  getStarted() {
    console.log(this.getStartedForm.value);
  }
}
