import {Component, ViewEncapsulation} from '@angular/core';
import { CalendarComponent } from './features/calendar/calendar.component';
import {HeaderComponent} from "./core/components/header/header.component";
import {FooterComponent} from "./core/components/footer/footer.component";
import {RouterOutlet} from "@angular/router";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

