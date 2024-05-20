import { Routes } from '@angular/router';
import {HeroComponent} from "./features/hero/hero.component";

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'calendar',
    loadComponent: () => import('./features/calendar/calendar.component').then(c => c.CalendarComponent)}
];
