import { Directive, HostListener, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as CollectionActions from '../store/collection/collection.actions';
import { Collection } from '../models/collection';

@Directive({
  selector: '[imageAnimationDirective]'
})
export class ImageAnimationDirective {
  @Input() public previewCollection: Collection;

  @HostListener('mouseover') public onMouseOver() {
    this.store.dispatch(new CollectionActions.UpdatePreviewCollection(this.previewCollection));
  }

  @HostListener('click') public onClick() {
    console.log('Element was clicked: ', this.previewCollection);
  }

  constructor(private store: Store<fromApp.AppState>) {}
}