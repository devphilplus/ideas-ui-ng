import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  signin(email: string, password: string) {
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
}
