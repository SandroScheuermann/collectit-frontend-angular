import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RegisterRequest } from 'src/app/views/register/models/register-request';
import { LoginRequest } from 'src/app/views/login/models/login-request';
import { Router } from '@angular/router';
import { jwtDecode } from "jwt-decode";
import { LoginResponse } from 'src/app/views/login/models/login-response';
import { environment } from 'src/environments/environment';
import { GoogleLoginRequest } from 'src/app/views/login/models/google-oauth-login-request';

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
        catchError(this.handleError));
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
        catchError(this.handleError)
      );
  }

  googleOAuthLogin(googleLoginRequest: any): Observable<string> {

    const loginRequest: GoogleLoginRequest = {
      Credential: googleLoginRequest
    }

    return this.http.post<string>(API_URL + "auth/login/oauth2", loginRequest)
      .pipe(
        tap(response => {
          const jwtPayload = jwtDecode<LoginResponse>(response);

          localStorage.setItem("ThisIsntAJwtToken", response);
          localStorage.setItem("UserName", jwtPayload.unique_name);
          localStorage.setItem("UserEmail", jwtPayload.email);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('AuthService error :', error);
    return throwError(() => new Error('Error communicating with the API'));
  }

  logout(): void {
    localStorage.removeItem('ThisIsntAJwtToken');
    localStorage.removeItem('UserEmail');
    localStorage.removeItem('UserName');

    this.redirectToLoginPage();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('ThisIsntAJwtToken') ?? null;
    if (token && !this.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  isTokenExpired(token: any): boolean {
    const decodedToken: { exp: number } | null = jwtDecode(token);

    if (!decodedToken) {
      return true;
    }

    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
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
