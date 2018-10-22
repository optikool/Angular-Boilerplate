import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, mergeMap } from 'rxjs/operators';
import * as MusicActions from './music.actions';
import { Track } from '../../models/track';

@Injectable()
export class MusicEffects {
  constructor(private actions: Actions, private http: HttpClient) {}

  @Effect()
  musicFetch = this.actions
    .ofType(MusicActions.FETCH_TRACKS)
    .pipe(map((action: MusicActions.GetTracks) => {
      return action.payload
    }))
    .pipe(switchMap((trackData: Array<Track>) => {
      console.log('Music Effect data: ', trackData);
      const request = {
        method: 'GET',
        url: '/assets/rest/musicList.json',
        responseType: 'json',
        cache: true
      };

      return this.http.get(request.url);
    }))
    .pipe(mergeMap((data: Array<any>) => {
      console.log('Music Effect data: ', data);
      return [{
          type: MusicActions.ADD_TRACKS,
          payload: data
        }];
    }));

}