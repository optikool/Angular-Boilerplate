import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';
import * as fromApp from '../../store/app.reducers';
import * as CollectionActions from '../../store/collection/collection.actions';
import { Collection } from '../../models/collection';

@Component({
  selector: 'preview-component',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit, OnDestroy {
  previewLink: Collection;
  subscription: Subscription;
  locale: any;

  constructor(private store: Store<fromApp.AppState>) {
    this.locale = locale;
  }

  ngOnInit() {
    this.subscription = this.store.select('collectionList')
      .subscribe(
        data => {
          this.previewLink = data.previewCollection ? data.previewCollection : this.locale.NoImageSelected;
        }
      );
  }

  ngOnDestroy() {
    this.store.dispatch(new CollectionActions.UpdatePreviewCollection(this.locale.NoImageSelected));
  }
}