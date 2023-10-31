import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-passwordinput',
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordinputComponent),
      multi: true
    }
  ]
})
export class PasswordinputComponent implements ControlValueAccessor{

  showPasswordImage = './assets/password-show.svg'
  hidePasswordImage = './assets/password-hide.svg'
  showPassword = false;

  onChange!: (value: string) => void;
  value!: string;
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

  iconSource = this.hidePasswordImage;

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
    this.togglePasswordIcon()
  }

  togglePasswordIcon(){
   this.iconSource = this.iconSource === this.showPasswordImage ? this.hidePasswordImage : this.showPasswordImage
  }

}
