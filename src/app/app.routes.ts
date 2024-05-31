import { Routes } from '@angular/router';
import {HeroComponent} from "./features/hero/hero.component";
import {AuthGuard} from "./core/guards/auth.guard";

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'calendar',
    loadComponent: () => import('./features/calendar/calendar.component').then(c => c.CalendarComponent),
    canActivate: [AuthGuard]
  },
  { path: 'signin',
    loadComponent: () => import('./features/sign-forms/signin-form/signin-form.component').then(c => c.SigninFormComponent)
  },
  { path: 'signup',
    loadComponent: () => import('./features/sign-forms/signup-form/signup-form.component').then(c => c.SignupFormComponent)
  },
  { path: 'error',
    loadComponent: () => import('./shared/pages/not-authorized-page/not-authorized-page.component').then(c => c.NotAuthorizedPageComponent)
  },
];
