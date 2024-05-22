import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DrivingSchool} from "../../models/driving-school";
import {environment} from "../../../../environment/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrivingSchoolService {

  constructor(private http:HttpClient) {}

  getDrivingSchools(): Observable<DrivingSchool[]>{
    return this.http.get<DrivingSchool[]>(`${environment.api}/DrivingSchool`)
  }
}
