import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }

  join(
    client: string
  ): Observable<ApiResponse> {
    console.log('ClientService::join()');
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_client_join,
      {
        client: client
      }
    );
  }
}
