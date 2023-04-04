import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {

  enabled = true;
  message = '';
  message_type = 'info';

  timeEntry = new FormGroup({
    in: new FormControl('', []),
    out: new FormControl('', [])
  });

  attendanceForm = new FormGroup({
    user: new FormControl('', []),
    entries: new FormArray([])
  });

  constructor(
    private title: TitleService
  ) {
    this.title.set_title('Attendance');
  }

  get entries() {
    return this.attendanceForm.get('entries') as FormArray;
  }

  add_time_entry(): void {
    (this.attendanceForm.get('entries') as FormArray).push(this.timeEntry);
  }

  submit(): void {
    console.log('AttendanceComponent::submit()');
  }
}
