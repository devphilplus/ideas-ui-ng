import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  employeeForm = new FormGroup({
    given_name: new FormControl('', [
      Validators.required
    ]),
    middle_name: new FormControl('', [
    ]),
    family_name: new FormControl('', [
      Validators.required
    ]),
    employee_id: new FormControl('', []),
    prefix: new FormControl('', []),
    suffix: new FormControl('', [])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Employee');
  }

  get given_name() {
    return this.employeeForm.get('given_name');
  }

  get middle_name() {
    return this.employeeForm.get('middle_name');
  }

  get family_name() {
    return this.employeeForm.get('family_name');
  }

  get prefix() {
    return this.employeeForm.get('prefix');
  }

  get suffix() {
    return this.employeeForm.get('suffix');
  }

  save() {
    console.log('EmployeeComponent::save()');

    if (this.employeeForm.valid) {

    }
  }
}
