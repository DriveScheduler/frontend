import { Routes } from '@angular/router';
import {HeroComponent} from "./features/hero/hero.component";
import {AuthGuard, AuthGuardAdministration} from "./core/guards/auth.guard";

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'calendar',
    loadComponent: () => import('./features/calendar/calendar.component').then(c => c.CalendarComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    loadComponent: () => import('./features/account/account.component').then(c => c.AccountComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component').then(c => c.DashboardComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'administration',
    loadComponent: () => import('./features/administration/administration.component').then(c => c.AdministrationComponent),
    canActivate: [AuthGuardAdministration]
  },
  {
    path: 'signin',
    loadComponent: () => import('./features/sign-forms/signin-form/signin-form.component').then(c => c.SigninFormComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/sign-forms/signup-form/signup-form.component').then(c => c.SignupFormComponent)
  },
  {
    path: 'error',
    loadComponent: () => import('./shared/pages/not-authorized-page/not-authorized-page.component').then(c => c.NotAuthorizedPageComponent)
  },
];
