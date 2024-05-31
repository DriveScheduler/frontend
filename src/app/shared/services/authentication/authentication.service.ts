import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/User/login`, { email, password }).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          this.setToken(token);
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null{
    return localStorage.getItem('token');
  }

  getUserType(): string {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.role;
    }
    return '';
  }

  getUserId(): string {
    const token = this.getToken();
    if (token) {
      const decoded: any = jwtDecode(token);
      return decoded.id;
    }
    return '';
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}