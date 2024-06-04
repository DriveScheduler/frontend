import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {CustomInputComponent} from "src/app/shared/components/custom-input/custom-input.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Vehicle} from "src/app/shared/models/vehicle";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {FormUtilsService} from "src/app/shared/services/form_utils/form-utils.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";

@Component({
  selector: 'app-vehicle-update-modal',
  standalone: true,
  imports: [
    AsyncPipe,
    CustomInputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './vehicle-update-modal.component.html',
  styleUrl: './vehicle-update-modal.component.css'
})
export class VehicleUpdateModalComponent {

  @Input() vehicle!: Vehicle;
  @Output() vehicleUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private administrationService: AdministrationService,
    private formUtilsService: FormUtilsService,
    private customSnackbar: CustomSnackbarService
  ) {}

  vehicleUpdateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    registrationNumber: new FormControl('', Validators.required),
  });

  updateVehicle() {
    if (this.vehicleUpdateForm.invalid) {
      this.formUtilsService.markFormGroupDirty(this.vehicleUpdateForm);
      this.customSnackbar.show('Veuillez renseigner tous les champs correctement.', 'error');
      return;
    }

    const name = this.vehicleUpdateForm.value.name as string;
    const registrationNumber = (this.vehicleUpdateForm.value.registrationNumber as string).toUpperCase();

    const vehicleData = {
      id : this.vehicle.id,
      registrationNumber,
      name,
    };

    if (vehicleData.registrationNumber === this.vehicle.registrationNumber && vehicleData.name === this.vehicle.name) {
      this.customSnackbar.show('Aucune modification n\'a été effectuée.', 'error');
      return;
    }

    this.administrationService.updateVehicle(vehicleData).subscribe(
      () => {
        this.customSnackbar.show('Véhicule mis à jour !', 'success');
        this.vehicleUpdated.emit();
      }, error => {
        this.customSnackbar.show(error.error, 'error');
        this.restoreForm();
      });
  }

  restoreForm() {
    this.vehicleUpdateForm.patchValue(this.vehicle);
  }
}
