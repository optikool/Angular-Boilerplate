import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../models/collection';
import * as fromApp from '../../store/app.reducers';
import * as CollectionActions from '../../store/collection/collection.actions';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit, OnDestroy, AfterViewInit {
  locale: any;
  images: Array<Collection>
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
    this.locale = null;
  }

  ngAfterViewInit() {
    this.store.dispatch(new CollectionActions.FetchCollections());
    this.subscription = this.store.select('collectionList')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.images = data.collections;
        }
      );
  }

  ngOnInit() {
    this.locale = locale;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
