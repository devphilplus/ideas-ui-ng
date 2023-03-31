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

  tenant_add(
    tenant_id: string,
    name: string,
    slug: string,
    description: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_tenant_add,
      {
        tenant_id: tenant_id,
        name: name,
        slug: slug,
        description: description
      }
    );
  }

  tenant_get(
    tenant_id: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_tenant_get,
      {
        tenant_id: tenant_id
      }
    );
  }

  tenant_get_by_slug(
    slug: string
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.api_base + environment.path_tenant_get_by_slug,
      {
        slug: slug
      }
    );
  }
}
