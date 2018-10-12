import * as fromCollectionList from './collection.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  collectionList: fromCollectionList.State
}

export const reducers: ActionReducerMap<AppState> = {
  collectionList: fromCollectionList.collectionListReducer
};

