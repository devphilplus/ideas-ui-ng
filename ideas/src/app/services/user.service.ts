import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  signin(
    email: string,
    password: string
  ) {
    console.error("//todo");
  }

  signout() {
    console.error("//todo");
  }

  current() {
    console.error("//todo");
  }
}
