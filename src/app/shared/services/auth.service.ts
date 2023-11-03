import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RegisterRequest } from 'src/app/views/register/models/register-request';
import { LoginRequest } from 'src/app/views/login/models/login-request';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { LoginResponse } from 'src/app/views/login/models/login-response';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(name: string, email: string, password: string): Observable<any> {

    const registerRequest: RegisterRequest = {
      UserEmail: email,
      UserName: name,
      Password: password
    };

    return this.http.post(API_URL + "auth/register", registerRequest)
      .pipe(
        catchError(error => throwError(error)));
  }

  login(email: string, password: string): Observable<string> {

    const loginRequest: LoginRequest = {
      UserEmail: email,
      Password: password
    };

    return this.http.post<string>(API_URL + "auth/login", loginRequest)
      .pipe(
        tap(response => {

          const jwtPayload = jwtDecode<LoginResponse>(response);

          localStorage.setItem("NotJwtToken", response);
          localStorage.setItem("UserName", jwtPayload.unique_name);
          localStorage.setItem("UserEmail", jwtPayload.email);

        }),
        catchError(error => {
          return throwError(error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('UserEmail');
    localStorage.removeItem('UserName');
    localStorage.removeItem('NotJwtToken');

    this.redirectToLoginPage();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('NotJwtToken') ?? null;
    if (token) {
      return true;
    }
    return false;
  }

  redirectToWelcomePage() {
    this.router.navigate(['/welcome']);
  }

  redirectToRegisterPage() {
    this.router.navigate(['/register']);
  }

  redirectToLoginPage() {
    this.router.navigate(['/login']);
  }
}
