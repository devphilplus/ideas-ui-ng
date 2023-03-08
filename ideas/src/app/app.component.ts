import { Component } from '@angular/core';
import { TitleService } from './services/title.service';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { User } from './classes/user';
import { Observable } from 'rxjs';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  app_name = environment.app_name;
  user$: Observable<User> = new Observable<User>();

  constructor(
    private title: TitleService,
    private user_service: UserService,
    private msg_service: MessageService
  ) {
    this.title.set_title('Welcome');

    this.user$ = this.user_service.user$
  }
}
