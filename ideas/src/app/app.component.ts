import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TitleService } from './services/title.service';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import { User } from './classes/user';
import { Observable } from 'rxjs';
import { Message, MessageService } from './services/message.service';

import {
  MatSnackBar,
  // MatSnackBarHorizontalPosition,
  // MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SelectionService } from './services/selection.service';
import { ObjectSelectorComponent } from './components/object-selector/object-selector.component';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  app_name = environment.app_name;
  current_tenant = 'Default';

  user$: Observable<User> = new Observable<User>();
  current_tenant$: Observable<string> = new Observable<string>();
  messages: Array<Message> = [];


  @ViewChild('$navselector') navselector!: MatSidenav;
  @ViewChild('ObjectSelectorComponent') selector!: ObjectSelectorComponent;


  constructor(
    private title: TitleService,
    private user_service: UserService,
    private msg_service: MessageService,
    private _notifier: MatSnackBar,
    private selection_service: SelectionService
  ) {
    this.title.set_title('Welcome');

    this.user$ = this.user_service.user$
    this.user$.subscribe(r => {
      r.tenants.forEach(t => {
        if (t.id == r.tenant_id) {
          console.log("refreshing tenant from", this.current_tenant, t.name);
          this.current_tenant = t.name;
          // this.current_tenant$.next(t.name);
        }
      });
    });

    this.msg_service.message$.subscribe((r: Message) => {
      console.log(r);
      if (r.text != '') {
        this.messages.push(r);
        this.show_notification(r.text);
      }
    });

    // selection_service._set_required_components(
    //   this.navselector,
    //   this.selector
    // );
  }

  ngAfterViewInit(): void {
    this.selection_service._set_required_components(
      this.navselector,
      this.selector
    );
  }

  show_notification(
    text: string
  ): void {
    this._notifier.open(text, 'close', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }

  set_current_tenant(
    tenant_id: string
  ): void {
    console.log('AppComponent::set_current_tenant', tenant_id);
    this.user_service.set_current_tenant(tenant_id);
  }

  show_selector(): void {
    this.navselector.toggle();
    // this.selection_service.select();
  }
}
