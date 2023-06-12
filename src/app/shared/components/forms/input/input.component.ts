import { Component, Input } from '@angular/core';
import { InputBase } from 'src/app/shared/interfaces/input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export default class InputComponent {
  @Input() inputContent!: InputBase;
  @Input() hasError: boolean = false;
}
