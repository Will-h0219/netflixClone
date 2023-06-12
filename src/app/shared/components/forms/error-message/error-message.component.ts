import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from "@angular/forms";

interface ErrorMessagesDict {
  [key: string]: string;
}

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() errorMessages: ErrorMessagesDict = {};
  @Input() singleError: boolean = false;

  errorTypes: string[] = [];
  displayedErrorMessage: string = 'Test';

  ngOnInit(): void {
    this.getErrorTypes();
    this.getErrors();
  }

  getErrorTypes() {
    this.errorTypes = this.control && this.control.errors ? Object.keys(this.control.errors) : [];
    if (this.singleError && this.errorTypes.length > 1) {
      this.errorTypes = [ this.errorTypes[0] ];
    }
  }

  getErrors() {
    if (this.control) {
      this.control.valueChanges.subscribe({
        next: () => {
          if (this.control.invalid && (this.control.dirty || this.control.touched)) {
            this.getErrorTypes();
          }
        }
      })
    }
  }

  getErrorMessage(errorType: string): string {
    return this.errorMessages[errorType] || `default.${errorType}`;
  }

}
