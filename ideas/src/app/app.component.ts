import { Component } from '@angular/core';
import { TitleService } from './services/title.service';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { User } from './classes/user';
import { Observable } from 'rxjs';
import { Message, MessageService } from './services/message.service';
import {
  MatLegacySnackBar as MatSnackBar,
  MatLegacySnackBarHorizontalPosition as MatSnackBarHorizontalPosition,
  MatLegacySnackBarVerticalPosition as MatSnackBarVerticalPosition,
} from '@angular/material/legacy-snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  app_name = environment.app_name;
  user$: Observable<User> = new Observable<User>();
  messages: Array<Message> = [];

  constructor(
    private title: TitleService,
    private user_service: UserService,
    private msg_service: MessageService,
    private _notifier: MatSnackBar
  ) {
    this.title.set_title('Welcome');

    this.user$ = this.user_service.user$

    this.msg_service.message$.subscribe((r: Message) => {
      this.messages.push(r);
      this.show_notification(r.text);
    });
  }

  show_notification(
    text: string
  ): void {
    this._notifier.open(text, 'close', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3
    });
  }
}
