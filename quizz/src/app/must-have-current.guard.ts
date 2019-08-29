import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuizzService } from './quizz.service';

@Injectable({
  providedIn: 'root'
})
export class MustHaveCurrentGuard implements CanActivate {

  constructor(private quizz: QuizzService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.quizz.getCurrent()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
