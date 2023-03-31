import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { TenantService } from '../../services/tenant.service';
import { ApiResponse } from 'src/app/classes/api-response';
import { MessageService, MessageType } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  tenantForm = new FormGroup({
    tenant_id: new FormControl('', []),
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
    private msg_service: MessageService,
    private tenant_service: TenantService,
    private route: ActivatedRoute
  ) {
    this.title.set_title('Tenant');
  }

  ngOnInit(): void {
    console.log('TenantComponent::ngOnInit()');

    let op = this.route.snapshot.paramMap.get('slug');
    console.debug('TenantComponent::ngOnInit()', op);
  }

  get tenant_id() {
    return this.tenantForm.get('tenant_id');
  }

  get name() {
    return this.tenantForm.get('name');
  }

  get slug() {
    return this.tenantForm.get('slug');
  }

  get description() {
    return this.tenantForm.get('description');
  }

  save(): void {
    console.log('TenantComponent::save()');
    
    if (this.tenantForm.valid) {
      this.enabled = false;
      this.tenant_service.tenant_add(
        this.tenantForm.get('tenant_id')?.value || '',
        this.tenantForm.get('name')?.value || '',
        this.tenantForm.get('slug')?.value || '',
        this.tenantForm.get('description')?.value || ''
      ).subscribe((r: ApiResponse) => {
        if (r.success) {
          console.debug('TenantComponent::save() [1]', r);
        }
        this.msg_service.send(r.message, r.success ? MessageType.Info : MessageType.Error);
        this.enabled = true;
      });
    }
  }
}
