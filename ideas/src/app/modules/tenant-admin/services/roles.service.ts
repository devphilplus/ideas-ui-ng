import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) { }

  fetch(
    tenant_id: string,
    filter: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_tenant_roles_fetch,
      {
        tenant_id: tenant_id,
        filter: filter
      }
    );
  }
}
