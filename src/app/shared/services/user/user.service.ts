import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateUser} from "src/app/shared/models/createUser";
import {environment} from "src/environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {User} from "src/app/shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User | null>;
  public user$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User | null>(null);
    this.user$ = this.userSubject.asObservable();
  }

  createUser(user: CreateUser) : Observable<any> {
    return this.http.post<any>(`${environment.api}/User/Create`, user).pipe(
      tap(response => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
        }
      })
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${environment.api}/User`).pipe(
      tap(user => {
        this.userSubject.next(user);
      })
    );
  }

  updateUser(user: Partial<User>): Observable<any> {
    return this.http.put(`${environment.api}/User/Update`, user).pipe(
      tap(() => {
        this.userSubject.next({ ...this.userSubject.value, ...user } as User);
      })
    );
  }

  getTeachers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/User/Teachers`);
  }
}
