import {Component, Input} from '@angular/core';
import {Vehicle} from "src/app/shared/models/vehicle";

@Component({
  selector: 'app-number-card-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './number-card-vehicle.component.html',
  styleUrl: './number-card-vehicle.component.css'
})
export class NumberCardVehicleComponent {

  @Input() favoriteVehicle!: Vehicle;
  @Input() favoriteVehicleTimeSpent!: number;

}
