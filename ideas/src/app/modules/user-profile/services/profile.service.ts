import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  change_password(
    password: string
  ): Observable<ApiResponse> {
    console.log("ProfileService::change_password()");
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_user_change_password,
      {
        password: password
      }
    );
  }

  update(
    given_name: string,
    middle_name: string,
    family_name: string
  ): Observable<ApiResponse> {
    console.log("ProfileService::update()");
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_user_profile_update,
      {
        given_name: given_name,
        middle_name: middle_name,
        family_name: family_name
      }
    )
  }
}
