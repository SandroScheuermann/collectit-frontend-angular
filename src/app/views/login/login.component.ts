import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MicroLoadingService } from 'src/app/animations/microloader/service/microloading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputGroup: FormGroup;
  errorMessage: string = '';

  constructor(private authService: AuthService, private microLoadingService: MicroLoadingService) {
    this.inputGroup = new FormGroup({
      'email-input': new FormControl(),
      'password-input': new FormControl(),
    })
  }

  redirectToRegister() {
    this.authService.redirectToRegisterPage();
  }

  login() {

    const email = this.inputGroup.get('email-input')?.value
    const password = this.inputGroup.get('password-input')?.value

    this.microLoadingService.show();

    this.authService.login(email, password)
      .subscribe({
        error: (err) => {
          this.microLoadingService.hide();
          this.errorMessage = err.error;
          console.log(err);
        },
        complete: () => {
          this.microLoadingService.hide();
          this.authService.redirectToWelcomePage();
        }
      });
  }
}
