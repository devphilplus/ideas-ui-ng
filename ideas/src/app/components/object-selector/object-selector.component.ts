import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectionService } from 'src/app/services/selection.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-object-selector',
  templateUrl: './object-selector.component.html',
  styleUrls: ['./object-selector.component.scss']
})
export class ObjectSelectorComponent {

  frmFilter = new FormGroup({
    search: new FormControl('', [])
  });

  constructor(
    private title: TitleService,
    private selection_service: SelectionService
  ) {}

  filter(): void {
    console.log('ObjectSelectorComponent::filter()');
    this.selection_service._fetch(
      this.frmFilter.get('search')?.value || ''
    );
  }
}
