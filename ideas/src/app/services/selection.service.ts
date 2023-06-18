import { Injectable } from '@angular/core';
import { ObjectSelectorComponent } from '../components/object-selector/object-selector.component';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {



  constructor(
  ) { }

  select(): void {
    console.log('SelectionService::select()');
  }

  _set_selector_component(selector: any): void {
    console.debug("SelectionService::_set_selector_component()", selector);
  }
}
