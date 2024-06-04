import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vehicle} from "src/app/shared/models/Vehicle";

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {

  @Input() vehicle!: Vehicle;
  @Output() vehicleDeleted: EventEmitter<number> = new EventEmitter<number>();


  deleteVehicle() {

  }

  updateVehicle() {

  }
}
