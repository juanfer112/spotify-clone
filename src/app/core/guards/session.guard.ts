import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

export const SessionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  
  return checkCookieSession();
};

function checkCookieSession():boolean {
  const cookieService = inject (CookieService)
  const router = inject(Router);
  try {

    const token:boolean = cookieService.check('token');
    if(!token) {
      router.navigate(['/','auth'])
    } 
    return token;

  } catch (error) {
    console.log('Algo sucedio??', error);
    return false;  
 }
}
