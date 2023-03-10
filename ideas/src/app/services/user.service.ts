import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../classes/api-response';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, tap } from 'rxjs';
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
        self.msg_service.send(
          r.message,
          r.success ? MessageType.Info : MessageType.Error
        );
      })
    );
    // ).subscribe((r: ApiResponse) => {
    //   console.debug(r);
    //   this.msg_service.send(
    //     r.message,
    //     r.success ? MessageType.Info : MessageType.Error
    //   )
    // });
  }

  signout() {
    console.error("//todo");
  }

  current() {
    console.error("//todo");
    if (sessionStorage.getItem(environment.session_token_key)) {
      this.http.post<ApiResponse>(
        environment.api_base + environment.path_user_current,
        {}
      ).subscribe((r: ApiResponse) => {
        console.debug(r);
        if (r.success) {
          console.info("success");
          const user = (r.data as {
            user: {
              email: string,
              name: string
            }
          }).user;
          this._user$.next(new User(
            user.email,
            user.name
          ));
        } else {
          console.error("error");
        }
      });
    }
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }
}
