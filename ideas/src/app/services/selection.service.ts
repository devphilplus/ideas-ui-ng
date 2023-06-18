import { Injectable } from '@angular/core';
import { ObjectSelectorComponent } from '../components/object-selector/object-selector.component';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  _sidenav: MatSidenav | null = null;
  _selector: ObjectSelectorComponent | null = null;

  constructor(
  ) { }

  select(): void {
    console.log('SelectionService::select()');
    console.debug(this._sidenav);
    this._sidenav?.toggle();
  }

  _set_required_components(
    sidenav: MatSidenav,
    selector: ObjectSelectorComponent
  ): void {
    console.log("SelectionService::_set_required_components()");
    this._sidenav = sidenav;
    this._selector = selector;
  }
}
