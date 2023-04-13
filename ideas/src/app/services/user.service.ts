import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../classes/api-response';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../classes/user';
import { Message, MessageService, MessageType } from './message.service';
// import { empty } from "uuidv4";

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
    console.info("UserService::signout()");
    sessionStorage.removeItem(environment.session_token_key);
  }

  current() {
    console.info("UserService::current()");
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
              family_name: string,
              tenant_id: string,
              tenants: Array<{
                id: string,
                active: boolean,
                name: string,
                slug: string
              }>
            }
          }).user;
          // console.debug(user);
          
          let name = user.given_name;
          if (name == '') {
            name = user.family_name;
            if (name == '') {
              name = user.email;
            }
          }

          this._user$.next(new User(
            user.email,
            name,
            user.tenant_id,
            user.tenants
          ));
        } else {
          console.error("error", r);
        }
      });
    }
  }

  set_current_tenant(
    tenant_id: string
  ): void {
    console.info("UserService::set_current_tenant()");
    this.http.post<ApiResponse>(
      environment.api_base + environment.path_user_current_tenant_set,
      {
        tenant_id: tenant_id
      }
    ).subscribe((r: ApiResponse) => {
      console.debug("UserService::set_current_tenant()", r);
      if (r.success) {
        this.current();
      }
    })
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }
}
