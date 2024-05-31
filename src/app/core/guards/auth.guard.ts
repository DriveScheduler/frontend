import { inject } from "@angular/core";
import { jwtDecode } from 'jwt-decode';
import { Router } from "@angular/router";

export const AuthGuard = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token || !isTokenValid(token)) {
    router.navigateByUrl('/error');
    return false;
  }
  return true;
};

const isTokenValid = (token: string): boolean => {
  const decodedToken: any = jwtDecode(token);
  return decodedToken.exp > Math.floor(Date.now() / 1000);
};
