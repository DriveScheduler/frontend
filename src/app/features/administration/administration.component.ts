import { Component } from '@angular/core';
import {LessonCardComponent} from "src/app/features/dashboard/components/lesson-card/lesson-card.component";
import {VehicleCardComponent} from "src/app/features/administration/components/vehicle-card/vehicle-card.component";
import {UserCardComponent} from "src/app/features/administration/components/user-card/user-card.component";

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [
    LessonCardComponent,
    VehicleCardComponent,
    UserCardComponent
  ],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.css'
})
export class AdministrationComponent {

}
