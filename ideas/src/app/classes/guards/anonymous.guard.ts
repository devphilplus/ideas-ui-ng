import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { MessageService, MessageType} from 'src/app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {

  constructor(
    private user_service: UserService,
    private msg_service: MessageService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.user_service.user$.pipe(
        map((user: User) => {
          return !user.is_signed_in;
        })
      );
  }
  
}
