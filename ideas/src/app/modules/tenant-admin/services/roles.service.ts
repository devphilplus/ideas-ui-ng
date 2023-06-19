import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/classes/api-response';
import { Item } from 'src/app/classes/selection/item';
import { ItemService } from 'src/app/classes/selection/item-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService implements ItemService {

  constructor(
    private http: HttpClient
  ) { }

  // fetch(
  //   tenant_id: string,
  //   filter: string
  // ): Observable<ApiResponse> {
  //   return this.http.post<ApiResponse>(
  //     environment.api_base + environment.path_tenant_roles_fetch,
  //     {
  //       tenant_id: tenant_id,
  //       filter: filter
  //     }
  //   );
  // }

  fetch(
    filter: string
  ): Array<Item> {
    console.log('RolesService::fetch()');
    return new Array<Item>();
  }
}
