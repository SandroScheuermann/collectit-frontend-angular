import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MicroLoadingService } from 'src/app/animations/microloader/service/microloading.service';
import { PasswordValidators } from 'ngx-validators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  errorMessage: string = '';
  inputGroup: FormGroup;


  constructor(private router: Router, private authService: AuthService, private microLoadingService: MicroLoadingService) {
    this.inputGroup = new FormGroup({
      'name-input': new FormControl('', this.nameValidators),
      'email-input': new FormControl('', this.emailValidators),
      'password-input': new FormControl('', this.passwordValidators),
    })
  }

  register() {
    if (this.inputGroup.valid) {

      const name = this.inputGroup.get('name-input')?.value;
      const email = this.inputGroup.get('email-input')?.value;
      const password = this.inputGroup.get('password-input')?.value;

      this.microLoadingService.show();

      this.authService.register(name, email, password).subscribe({
        error: (err) => { this.microLoadingService.hide(), this.errorMessage = err.error },
        complete: () => { this.microLoadingService.hide(), this.redirectToLogin() }
      });
    }
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  nameValidators = [Validators.required, Validators.minLength(4)];
  nameValidationMessages = {
    required: 'Username is required.',
    minlength: 'Name must be at least 4 characters'
  };

  emailValidators = [Validators.required, Validators.email]
  emailValidationMessages = {
    required: 'Email is required',
    email: 'Incorrect email format'
  };

  passwordValidators = [
    Validators.required,
    PasswordValidators.repeatCharacterRegexRule(4),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1),
    PasswordValidators.specialCharacterRule(1)];

  passwordValidationMessages = {
    required: 'Password is required.',
    repeatCharacterRegexRule: 'Password should not contain the same character repeated more than 4 times.',
    alphabeticalCharacterRule: 'Password must contain at least 1 letter.',
    digitCharacterRule: 'Password must contain at least 1 number.',
    lowercaseCharacterRule: 'Password must contain at least 1 lowercase letter.',
    uppercaseCharacterRule: 'Password must contain at least 1 uppercase letter.',
    specialCharacterRule: 'Password must contain at least 1 special character.'
  };
}
