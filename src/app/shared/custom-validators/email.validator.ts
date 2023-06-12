import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

export function validateEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const emailValid = emailPattern.test(value);

    return !emailValid ? { invalidEmail: true } : null;
  }
}
