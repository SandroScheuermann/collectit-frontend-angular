import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() control: AbstractControl | null = null;
  @Input() validationMessages: { [key: string]: string } = {};

  showPasswordImage = './assets/password-show.svg'
  hidePasswordImage = './assets/password-hide.svg'
  passwordIconSource = this.hidePasswordImage;
  isPasswordVisible = false;
  value!: string;
  onChange!: (value: string) => void;
  onTouched!: () => void;
  showValidationMessage: boolean = false;

  iconSource = './assets/validation-error.svg'

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

  get validationMessage(): string {
    if (this.control) {
      for (const errorKey in this.control.errors) {
        if (this.control.errors.hasOwnProperty(errorKey) && this.control.touched) {
          return this.validationMessages[errorKey] || 'Invalid field';
        }
      }
    }
    return '';
  }

  togglePasswordVisibility(){
    this.isPasswordVisible = !this.isPasswordVisible;
    this.togglePasswordIcon()
  }

  togglePasswordIcon(){
   this.passwordIconSource = this.passwordIconSource === this.showPasswordImage ? this.hidePasswordImage : this.showPasswordImage
  }
}
