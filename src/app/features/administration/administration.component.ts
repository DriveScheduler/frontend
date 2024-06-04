import {Component, OnInit} from '@angular/core';
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";
import {VehicleCardComponent} from "src/app/features/administration/components/vehicle-card/vehicle-card.component";
import {UserCardComponent} from "src/app/features/administration/components/user-card/user-card.component";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {map, Observable} from "rxjs";
import {Vehicle} from "src/app/shared/models/Vehicle";
import {User} from "src/app/shared/models/user";
import {AsyncPipe} from "@angular/common";
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {FormUtilsService} from "src/app/shared/services/form_utils/form-utils.service";
import {Licence} from "src/app/shared/models/licence";
import {LicenceService} from "src/app/shared/services/licence/licence.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    LessonCardComponent,
    CommonModule,
    VehicleCardComponent,
    UserCardComponent,
    AsyncPipe,
    CustomInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent implements OnInit {
  vehicles$! : Observable<Vehicle[]>
  students$! : Observable<User[]>
  teachers$! : Observable<User[]>

  vehicleTypes$! : Observable<Licence[]>

  constructor (private licenceService : LicenceService, private administrationService: AdministrationService, private customSnackbar: CustomSnackbarService, private formUtilsService : FormUtilsService) {}

  vehicleCreationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    registrationNumber: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required)
  });

  ngOnInit() {
    this.getLicences();
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

  private getLicences() {
    this.vehicleTypes$ = this.licenceService.getLicences();
  }

  onVehicleDeleted($event: number) {
    this.vehicles$ = this.vehicles$.pipe(
      map(vehicles => vehicles.filter(vehicle => vehicle.id !== $event))
    );
  }

  onUserDeleted($event: string) {
    this.students$ = this.students$.pipe(
      map(users => users.filter(user => user.id !== $event))
    );
    this.teachers$ = this.teachers$.pipe(
      map(users => users.filter(user => user.id !== $event))
    );
  }

  addVehicle() {
    if (this.vehicleCreationForm.invalid) {
      this.formUtilsService.markFormGroupDirty(this.vehicleCreationForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    const name = this.vehicleCreationForm.value.name as string;
    const registrationNumber = this.vehicleCreationForm.value.registrationNumber as string;
    const type = parseInt(this.vehicleCreationForm.value.type as string, 10);

    const vehicleData = {
      name,
      registrationNumber,
      type
    };

    this.administrationService.createVehicle(vehicleData).subscribe(
      () => {
        this.customSnackbar.show('Véhicule créé !', 'success');
        this.getVehicles();
      },
      error => this.customSnackbar.show(error.error, 'error')
    );
  }
}
