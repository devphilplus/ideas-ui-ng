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
  ) { }


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
  }

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }
}
