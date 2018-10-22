import { ActionReducerMap } from '@ngrx/store';
import * as fromCollectionList from './collection/collection.reducers';
import * as fromTrackList from './music/music.reducers';

export interface AppState {
  collectionList: fromCollectionList.State,
  trackList: fromTrackList.State
}

export const reducers: ActionReducerMap<AppState> = {
  collectionList: fromCollectionList.collectionListReducer,
  trackList: fromTrackList.trackListReducer
};

