import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService} from "src/app/shared/services/authentication/authentication.service";
import {jwtDecode} from "jwt-decode";

export const AuthGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const token = authService.getToken()

  if (!token || !authService.isTokenValid(token)) {
    router.navigateByUrl('/error');
    return false;
  }
  return true;
};

export const AuthGuardAdministration = () => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  const token = authService.getToken()

  if (token && authService.isTokenValid(token)) {
    const decodedToken : any = jwtDecode(token);
    if (decodedToken.Role == 3) {
      return true;
    }
  }
  router.navigateByUrl('/');
  return false;
}
