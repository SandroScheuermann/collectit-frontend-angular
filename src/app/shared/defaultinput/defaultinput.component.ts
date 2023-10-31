import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-defaultinput',
  templateUrl: './defaultinput.component.html',
  styleUrls: ['./defaultinput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DefaultinputComponent),
      multi: true
    }
  ]
})
export class DefaultinputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() type: string = '';

  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  updateValue(value: string): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
