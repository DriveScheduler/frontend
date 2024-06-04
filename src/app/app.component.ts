import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { CalendarComponent } from './features/calendar/calendar.component';
import {HeaderComponent} from "./core/components/header/header.component";
import {FooterComponent} from "./core/components/footer/footer.component";
import {NavigationEnd, Router, RouterOutlet} from "@angular/router";
import {filter} from "rxjs";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, HeaderComponent, FooterComponent, RouterOutlet],
  providers: [],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showFooter: boolean = true;
  private noFooterRoutes: string[] = ['/'];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.showFooter = !this.noFooterRoutes.includes(event.url);
    });
  }
}

