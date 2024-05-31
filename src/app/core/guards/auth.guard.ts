import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const AuthGuard = () => {
  const router = inject(Router);
  // Si le user n'est pas connecté, alors il faudra le renvoyer sur la page d'error
  if(true){
    router.navigateByUrl('/error')
  }
  return true
}
