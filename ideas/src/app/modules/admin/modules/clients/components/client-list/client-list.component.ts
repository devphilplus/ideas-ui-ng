import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';
import { ClientsService } from '../../services/clients.service';
import { ApiResponse } from 'src/app/classes/api-response';

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
    private title: TitleService,
    private clients_service: ClientsService
  ) {
    this.title.set_title('Clients');
  }

  ngOnInit(): void {
    this.get_clients();
  }

  get_clients(): void {
    this.clients_service.clients().subscribe((r: ApiResponse) => {
      console.debug(r);
    });
  }
}
