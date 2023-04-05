import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  constructor(
    private http: HttpClient
  ) { }

  join(
    tenant: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_user_tenant_join,
      {
        tenant: tenant
      }
    );
  }
}
