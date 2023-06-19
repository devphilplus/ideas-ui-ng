import { Injectable } from '@angular/core';
import { ObjectSelectorComponent } from '../components/object-selector/object-selector.component';
import { MatSidenav } from '@angular/material/sidenav';
import { ItemService } from '../classes/selection/item-service';
import { SelectionClient } from '../classes/selection/selection-client';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  _sidenav: MatSidenav | null = null;
  _selector: ObjectSelectorComponent | null = null;

  _selectionClient: SelectionClient | null = null;
  _itemService: ItemService | null = null;

  constructor(
  ) { }

  select(
    itemService: ItemService
    // selectionClient: SelectionClient
  ): void {
    console.log('SelectionService::select()');
    
    // this._selectionClient = selectionClient;
    this._itemService = itemService;

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

  _fetch(
    filter: string
  ): void {
    console.log('SelectionService::_fetch()');
    this._itemService?.fetch(filter);
  }
}
