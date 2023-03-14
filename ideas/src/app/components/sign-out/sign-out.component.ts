import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {

  constructor(
    private title: TitleService,
    private user_service: UserService
  ) {
    this.title.set_title('Sign Out');
  }

  ngOnInit(): void {
    // clear out tokens in 3 seconds
    setTimeout(() => {
      this.user_service.signout();
    }, 3000);
  }

}
