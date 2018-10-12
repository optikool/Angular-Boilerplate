import { Component, OnInit, OnDestroy } from '@angular/core';
import { locale } from '../../constants/locale.constant';
import { Collection } from '../../models/collection';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as CollectionActions from '../../store/collection.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  locale: any;
  introText: string;
  imagePlaceHolder: Observable<fromApp.AppState>;
  subscription: Subscription;
  image: Collection;

  constructor(private store: Store<fromApp.AppState>) { 
    this.locale = null;
    this.introText = '';
  }

  ngOnInit() {
    this.locale = locale;
    this.store.dispatch(new CollectionActions.FetchCollections());
    this.subscription = this.store.select('collectionList')
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
