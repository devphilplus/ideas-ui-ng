import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  enabled = true;
  message = '';
  message_type = 'info';

  listForm = new FormGroup({
    
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Clients');
  }

  ngOnInit(): void {
  }

}
