import { Routes } from '@angular/router';
import {HeroComponent} from "./features/hero/hero.component";

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'calendar',
    loadComponent: () => import('./features/calendar/calendar.component').then(c => c.CalendarComponent)
  },
  { path: 'signin',
    loadComponent: () => import('./features/sign-forms/signin-form/signin-form.component').then(c => c.SigninFormComponent)
  },
  { path: 'signup',
    loadComponent: () => import('./features/sign-forms/signup-form/signup-form.component').then(c => c.SignupFormComponent)
  }
];
