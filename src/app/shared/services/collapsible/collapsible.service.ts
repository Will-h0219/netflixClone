import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface CollapsibleItem {
  id: string;
  isOpen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CollapsibleService {
  private _item!: CollapsibleItem;
  
  currentItem$: Subject<CollapsibleItem> = new Subject();

  constructor() { }

  setCurrentItem(item: CollapsibleItem) {
    this._item = item;
    this.currentItem$.next(this._item);
  }
}
