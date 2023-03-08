import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../classes/api-response';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _user$ = new BehaviorSubject<User>(User.anonymous());

  constructor(
    private http: HttpClient
  ) {
    this.current();
  }


  signin(
    email: string,
    password: string
  ) {
    this.http.post<ApiResponse>(
      environment.api_base + environment.path_signin,
      {
        email: email,
        password: password
      }
    ).subscribe((r: ApiResponse) => {
      console.debug(r);
    });
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
        }
      });
    }
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }
}
