import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { RegisterRequest} from '../models/register-request';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string): Observable<any> {

    const registerRequest: RegisterRequest = {
      UserEmail: email,
      UserName: name,
      Password: password
    };

    return this.http.post("https://localhost:7135/auth/register", registerRequest)
       .pipe(
        catchError(error => throwError(error)));
  }

}
