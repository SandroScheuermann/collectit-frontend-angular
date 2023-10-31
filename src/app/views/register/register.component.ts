import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  inputGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService) {
    this.inputGroup = new FormGroup({
      'name-input': new FormControl(),
      'email-input': new FormControl(),
      'password-input': new FormControl(),
    })
  }

  register() {
    const name = this.inputGroup.get('name-input')?.value;
    const email = this.inputGroup.get('email-input')?.value;
    const password = this.inputGroup.get('password-input')?.value;

    this.authService.register(name, email, password).subscribe({
      next: () => { },
      error: () => { },
      complete: () => { }
    });

  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
