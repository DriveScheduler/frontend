import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {environment} from "../../../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    return this.http.post(`${environment.api}/User/Create`, user);
  }

  getTeachers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/User/Teachers`);
  }
}
