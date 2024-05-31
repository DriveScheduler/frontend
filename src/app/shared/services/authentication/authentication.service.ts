import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import {environment} from 'src/environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;

  constructor(private http: HttpClient) {
    const token = this.getToken();
    const isAuthenticated = !!token && this.isTokenValid(token);
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(isAuthenticated);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.api}/User/login`, { email, password }).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          this.setToken(token);
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.exp > Math.floor(Date.now() / 1000);
    } catch (e) {
      return false;
    }
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
    this.isAuthenticatedSubject.next(false);
  }
}
