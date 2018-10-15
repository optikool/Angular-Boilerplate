import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';
import * as fromApp from '../../store/app.reducers';
import * as CollectionActions from '../../store/collection/collection.actions';
import { Collection } from '../../models/collection';

@Component({
  selector: 'preview-component',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit, OnDestroy {
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
    this.previewLink = this.locale.NoImageSelected;
  }
}