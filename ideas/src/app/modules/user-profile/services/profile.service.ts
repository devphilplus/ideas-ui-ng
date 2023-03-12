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
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_user_change_password,
      {
        password: password
      }
    );
  }
}
