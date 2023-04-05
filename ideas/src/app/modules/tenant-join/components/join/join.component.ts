import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';
import { ApiResponse } from 'src/app/classes/api-response';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  tenantJoinForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(
    private title: TitleService,
    private tenant_service: TenantService
  ) {
    this.title.set_title('Join Tenant');
  }

  get tenant_name() {
    return this.tenantJoinForm.get('name');
  }

  submit(): void {
    console.log('JoinComponent::submit()');

    this.enabled = false;
    this.tenant_service.join(
      this.tenant_name?.value || ''
    ).subscribe((r: ApiResponse) => {
      console.log(r);
      this.enabled = true;
    });
  }
}
