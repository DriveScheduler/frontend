import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "src/app/shared/models/Vehicle";
import {environment} from "src/environments/environment";
import {Observable} from "rxjs";
import {User} from "src/app/shared/models/user";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  createVehicle(vehicle: Partial<Vehicle>) {
    return this.http.post(`${environment.api}/Admin/CreateVehicle`, vehicle);
  }

  updateVehicle(vehicle: Partial<Vehicle>) {
    return this.http.put(`${environment.api}/Admin/UpdateVehicle`, vehicle);
  }

  getVehicles() : Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.api}/Admin/Vehicles`);
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/Admin/Users`);
  }
}
