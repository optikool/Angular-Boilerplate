import { ActionReducerMap } from '@ngrx/store';
import * as fromCollectionList from './collection/collection.reducers';

export interface AppState {
  collectionList: fromCollectionList.State
}

export const reducers: ActionReducerMap<AppState> = {
  collectionList: fromCollectionList.collectionListReducer
};

