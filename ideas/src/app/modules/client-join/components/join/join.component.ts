import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { ClientService } from '../../services/client.service';
import { MessageService, MessageType } from 'src/app/services/message.service';
import { ApiResponse } from 'src/app/classes/api-response';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  joinForm = new FormGroup({
    client: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });

  constructor(
    private title: TitleService,
    private client_service: ClientService,
    private msg_service: MessageService
  ) {
    this.title.set_title('Join Client');
  }

  ngOnInit(): void {
  }

  join(): void {
    console.log("JoinComponent::join()");

    this.enabled = false;
    this.client_service.join(
      this.joinForm.get('client')?.value || ''
    ).subscribe((r: ApiResponse) => {
      console.debug(r);
      this.msg_service.send(r.message, r.success ? MessageType.Info : MessageType.Error);
    });
  }
}
