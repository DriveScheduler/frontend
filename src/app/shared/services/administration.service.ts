import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vehicle} from "src/app/shared/models/vehicle";
import {environment} from "src/environments/environment";
import {Observable} from "rxjs";
import {User} from "src/app/shared/models/user";
import {VehicleCreation} from "src/app/shared/models/vehicleCreation";
import {VehicleUpdate} from "src/app/shared/models/vehicleUpdate";

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  createVehicle(vehicle: VehicleCreation) {
    return this.http.post(`${environment.api}/Admin/CreateVehicle`, vehicle);
  }

  updateVehicle(vehicle: VehicleUpdate) {
    return this.http.put(`${environment.api}/Admin/UpdateVehicle`, vehicle);
  }

  getVehicles() : Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.api}/Admin/Vehicles`);
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/Admin/Users`);
  }

  deleteVehicle(vehicleId: number) {
    return this.http.delete(`${environment.api}/Admin/Vehicle/${vehicleId}`);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${environment.api}/Admin/User/${userId}`);
  }
}
