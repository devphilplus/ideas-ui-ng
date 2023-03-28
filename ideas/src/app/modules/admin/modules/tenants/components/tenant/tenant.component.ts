import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  tenantForm = new FormGroup({
    id: new FormControl('', []),
    name: new FormControl('', [
      Validators.required
    ]),
    slug: new FormControl('', [
      Validators.required
    ]),
    description: new FormControl('', {})
  });
  
  constructor(
    private title: TitleService,
    private tenant_service: TenantService
  ) {
    this.title.set_title('Tenant');
  }

  save(): void {
    console.log('TenantComponent::save()');
    
  }
}
