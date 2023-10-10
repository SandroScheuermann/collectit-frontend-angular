import { Component } from '@angular/core';

@Component({
  selector: 'app-passwordinput',
  templateUrl: './passwordinput.component.html',
  styleUrls: ['./passwordinput.component.css']
})
export class PasswordinputComponent {
  showPasswordImage = './assets/password-show.svg'
  hidePasswordImage = './assets/password-hide.svg'
  showPassword = false;

  iconSource = this.hidePasswordImage;

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
    this.togglePasswordIcon()
  }

  togglePasswordIcon(){
   this.iconSource = this.iconSource === this.showPasswordImage ? this.hidePasswordImage : this.showPasswordImage
  }

}
