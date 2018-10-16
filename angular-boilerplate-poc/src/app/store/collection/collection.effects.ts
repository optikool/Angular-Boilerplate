import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as CollectionActions from './collection.actions';
import { Collection } from '../../models/collection';

@Injectable()
export class CollectionEffects {
  constructor(private actions: Actions, private http: HttpClient) {}

  @Effect()
  collectionFetch = this.actions
    .ofType(CollectionActions.FETCH_COLLECTIONS)
    .pipe(map((action: CollectionActions.GetCollections) => {
      return action.payload
    }))
    .pipe(switchMap((collectionData: Array<Collection>) => {
      const request = {
        method: 'GET',
        url: '/assets/rest/imageList.json',
        responseType: 'json',
        cache: true
      };

      return this.http.get(request.url);
    }))
    .pipe(mergeMap((data: Array<any>) => {
      const idx = Math.floor(Math.random() * Math.floor(data.length));
      return [
        {
          type: CollectionActions.ADD_COLLECTIONS,
          payload: data
        },
        {
          type: CollectionActions.SET_RANDOM_COLLECTION,
          payload: data[idx]
        }
      ];
    }));
}