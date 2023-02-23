import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient
  ) { }

  register(
    email: string
  ): Observable<ApiResponse> {

    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_register,
      {
        id: uuidv4(),
        email: email
      }
    );
  }

  register_complete(
    token: string,
    pw: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_register_complete,
      {
        token: token,
        pw: pw
      }
    );
  }

  get_signup_details(
    token: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_register_details,
      {
        token: token
      }
    );
  }
}
