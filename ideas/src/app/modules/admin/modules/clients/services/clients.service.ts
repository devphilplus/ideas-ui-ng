import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }

  clients(): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_clients_fetch,
      {}
    );
  }
}
