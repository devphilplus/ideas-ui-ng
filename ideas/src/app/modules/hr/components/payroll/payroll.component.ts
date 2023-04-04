import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent {

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
}
