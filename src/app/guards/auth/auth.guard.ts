import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      this.authService.redirectToWelcomePage()
      return false;
    }
    return true;
  }
}
