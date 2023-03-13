import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

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
    client: new FormControl('', [])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Join Client');
  }

  ngOnInit(): void {
  }

}
