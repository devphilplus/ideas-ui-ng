import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Message, MessageService, MessageType } from 'src/app/services/message.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  generalForm = new FormGroup({
    given_name: new FormControl('', []),
    middle_name: new FormControl('', []),
    family_name: new FormControl('', [])
  });

  constructor(
    private title: TitleService,
    private msg_service: MessageService
  ) {
    this.title.set_title("General");

    this.msg_service.message$.subscribe((r: Message) => {
      console.debug(r);
      // only show errors
      if (r.type == MessageType.Error) {
        this.message = r.text;
        this.message_type = "error";
      }
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    console.log("GeneralComponent::save()");
  }
}
