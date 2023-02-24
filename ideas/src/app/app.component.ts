import { Component } from '@angular/core';
import { TitleService } from './services/title.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  app_name = environment.app_name;

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Welcome');
  }
}
