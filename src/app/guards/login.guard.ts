import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  token: boolean = false;

  constructor(
    private _router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    localStorage.getItem('user') ? this.token = true : this.token = false; 

    return !this.token ? true : this._router.navigateByUrl('main');
  }
  
}
