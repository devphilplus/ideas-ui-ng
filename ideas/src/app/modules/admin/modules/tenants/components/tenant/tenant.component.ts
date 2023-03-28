import { Component } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {

  enabled = true;
  
  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Tenant');
  }
}
