import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

