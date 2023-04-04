import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  payrollForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    start: new FormControl('', [
      Validators.required
    ]),
    end: new FormControl('', [
      Validators.required
    ])
  });


  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Payroll');
  }

  submit(): void {
    console.log('PayrollComponent::submit()');
  }
}
