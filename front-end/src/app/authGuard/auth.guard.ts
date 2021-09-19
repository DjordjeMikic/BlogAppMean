import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../modules/userModule/services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.loggedIn) {
        this.router.navigate(['/user']);
        return false;
      }
    return true;
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.userService.loggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }

}
