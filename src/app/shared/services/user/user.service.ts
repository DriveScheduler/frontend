import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreateUser} from "../../models/createUser";
import {environment} from "src/environments/environment";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {User} from "src/app/shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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

  getUser() : Observable<User> {
    return this.http.get<any>(`${environment.api}/User/`);
  }

  updateUser(user: Partial<User>): Observable<any> {
    return this.http.put(`${environment.api}/User/Update`, user);
  }

  getTeachers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/User/Teachers`);
  }
}
