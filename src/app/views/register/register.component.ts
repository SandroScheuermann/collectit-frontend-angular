import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formGroup: FormGroup;

  constructor(private router: Router) {
    this.formGroup = new FormGroup({
      'nameInput': new FormControl(),
      'emailInput': new FormControl(),
      'passwordInput': new FormControl(),
    })
  }

  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
