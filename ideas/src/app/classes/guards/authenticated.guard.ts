import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { User } from '../user';
import { MessageService, MessageType} from 'src/app/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private user_service: UserService,
    private msg_service: MessageService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.user_service.user$.pipe(
        map((user: User) => {
          console.debug("//todo: remove", user);
          console.debug("//todo: remove", user.is_signed_in);
          if (!user.is_signed_in) {
            this.msg_service.send(
              "Please sign in",
              MessageType.Info
            );
          }
          return user.is_signed_in;
        })
      );
  }
  
}


// export const AuthenticatedGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   return this.user_service.user$.pipe(
//     map((user: User) => {
//       console.debug("//todo: remove", user);
//       console.debug("//todo: remove", user.is_signed_in);
//       if (!user.is_signed_in) {
//         this.msg_service.send(
//           "Please sign in",
//           MessageType.Info
//         );
//       }
//       return user.is_signed_in;
//     })
//   );
// }