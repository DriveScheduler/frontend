import {Component, OnDestroy, OnInit} from '@angular/core';
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";
import {VehicleCardComponent} from "src/app/features/administration/components/vehicle-card/vehicle-card.component";
import {UserCardComponent} from "src/app/features/administration/components/user-card/user-card.component";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {map, Observable} from "rxjs";
import {Vehicle} from "src/app/shared/models/Vehicle";
import {User} from "src/app/shared/models/user";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    LessonCardComponent,
    VehicleCardComponent,
    UserCardComponent,
    AsyncPipe
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {
  vehicles$! : Observable<Vehicle[]>
  students$! : Observable<User[]>
  teachers$! : Observable<User[]>

  constructor (private administrationService: AdministrationService) {}

  ngOnInit() {
    this.getVehicles();
    this.getUsers();
  }

  getVehicles() : Observable<Vehicle[]> {
    return this.vehicles$ = this.administrationService.getVehicles();
  }

  getUsers() {
    const users$ : Observable<User[]> = this.administrationService.getUsers();

    this.students$ = users$.pipe(
      map(users => users.filter(user => user.userType.value === 0))
    );

    this.teachers$ = users$.pipe(
      map(users => users.filter(user => user.userType.value === 1))
    );
  }

  onVehicleDeleted($event: number) {

  }

  onUserDeleted($event: number) {

  }
}
