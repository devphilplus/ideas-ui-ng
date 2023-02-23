import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';

@Component({
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.scss']
})
export class RegistrationCompleteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private signup_service: SignUpService
  ) { }

  ngOnInit(): void {
    
  }

}
