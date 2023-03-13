import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../classes/api-response';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../classes/user';
import { Message, MessageService, MessageType } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _user$ = new BehaviorSubject<User>(User.anonymous());

  constructor(
    private http: HttpClient,
    private msg_service: MessageService
  ) {
    this.current();
  }


  signin(
    email: string,
    password: string
  ): Observable<ApiResponse> {
    const self = this;
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_signin,
      {
        email: email,
        password: password
      }
    ).pipe(
      tap((r: ApiResponse) => {
        console.debug(r);
        self.current();
        self.msg_service.send(
          r.message,
          r.success ? MessageType.Info : MessageType.Error
        );
      }),
    );
  }

  signout() {
    console.error("//todo UserService::signout()");
  }

  current() {
    console.error("//todo UserService::current()");
    if (sessionStorage.getItem(environment.session_token_key)) {
      this.http.post<ApiResponse>(
        environment.api_base + environment.path_user_current,
        {}
      ).subscribe((r: ApiResponse) => {
        if (r.success) {
          const user = (r.data as {
            user: {
              email: string,
              given_name: string,
              middle_name: string,
              family_name: string
            }
          }).user;
          console.debug(user);
          
          let name = `${user.given_name}${user.family_name}`;
          if (name != "") {
            name = `${user.given_name} ${user.family_name}`;
          }

          this._user$.next(new User(
            user.email,
            name
          ));
        } else {
          console.error("error", r);
        }
      });
    }
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }
}
