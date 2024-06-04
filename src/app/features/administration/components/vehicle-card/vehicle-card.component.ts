import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vehicle} from "src/app/shared/models/vehicle";
import {AdministrationService} from "src/app/shared/services/administration.service";
import {CustomSnackbarService} from "src/app/shared/components/custom-snackbar/custom-snackbar.service";
import {
  VehicleCreationModalComponent
} from "src/app/features/administration/components/vehicle-creation-modal/vehicle-creation-modal.component";
import {
  VehicleUpdateModalComponent
} from "src/app/features/administration/components/vehicle-update-modal/vehicle-update-modal.component";

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [
    VehicleCreationModalComponent,
    VehicleUpdateModalComponent
  ],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {

  @Input() vehicle!: Vehicle;
  @Output() vehicleDeleted: EventEmitter<number> = new EventEmitter<number>();
  @Output() vehicleUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor(private administrationService : AdministrationService, private customSnackbar : CustomSnackbarService) {}

  deleteVehicle() {
    this.administrationService.deleteVehicle(this.vehicle.id).subscribe(
      response => {
        this.customSnackbar.show('Véhicule supprimé !', 'success')
        this.vehicleDeleted.emit(this.vehicle.id);
      },
      error => {
        this.customSnackbar.show(error.error, 'error')
      });
  }

  onVehicleUpdated() {
    this.vehicleUpdated.emit();
  }
}
