import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService} from "src/app/shared/services/authentication/authentication.service";

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
