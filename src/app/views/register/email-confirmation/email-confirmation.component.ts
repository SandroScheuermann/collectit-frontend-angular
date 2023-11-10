import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {

  isEmailConfirmed = false;

  get getConfirmEmail(): string {
    return localStorage.getItem('ConfirmEmail') ?? "";
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['confirmed'] === 'true') {
        this.isEmailConfirmed = true;
      }
    });
  }

  redirectToLoginPage() {
    localStorage.removeItem('ConfirmEmail');
    this.router.navigate(['/login']);
  }
}
