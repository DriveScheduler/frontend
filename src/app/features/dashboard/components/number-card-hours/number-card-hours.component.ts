import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-number-card-hours',
  standalone: true,
  imports: [],
  templateUrl: './number-card-hours.component.html',
  styleUrl: './number-card-hours.component.css'
})
export class NumberCardHoursComponent {

  @Input() timeSpentThisWeek!: number;

}
