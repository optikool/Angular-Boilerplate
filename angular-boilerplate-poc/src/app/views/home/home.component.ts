import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../models/collection';
import * as CollectionActions from '../../store/collection/collection.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  locale: any;
  introText: string;
  imagePlaceHolder: Observable<fromApp.AppState>;
  subscription: Subscription;
  image: Collection;

  constructor(private store: Store<fromApp.AppState>) { 
    this.locale = null;
    this.introText = '';
    this.image = null;
  }

  ngOnInit() {
    this.locale = locale;
  }

  ngAfterViewInit() {
    this.store.dispatch(new CollectionActions.FetchCollections());
    this.subscription = this.store.select('collectionList')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.image = data.randomCollection;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
