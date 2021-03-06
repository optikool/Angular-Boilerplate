import * as CollectionActions from './collection.actions';
import { Collection } from '../../models/collection';

export interface AppState {
  collectionList: State
}

export interface State {
  collections: Array<Collection>;
  randomCollection: Collection;
  previewCollection: Collection;
}

const initialState: State = {
  collections: [],
  randomCollection: null,
  previewCollection: null
};

export function collectionListReducer(state = initialState, action: CollectionActions.CollectionActions) {
  let idx: number = 0;

  switch (action.type) {
    case CollectionActions.GET_COLLECTIONS:
      return {
        ...state
      };
    case CollectionActions.ADD_COLLECTION:
      return {
        ...state,
        collections: [...state.collections, action.payload]
      };
    case CollectionActions.ADD_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    case CollectionActions.GET_RANDOM_COLLECTION:
      idx = Math.floor(Math.random() * Math.floor(state.collections.length));
      return {
        ...state,
        randomCollection: state.collections[idx]
      };
    case CollectionActions.SET_RANDOM_COLLECTION:
      idx = Math.floor(Math.random() * Math.floor(state.collections.length));
      return {
        ...state,
        randomCollection: state.collections[idx]
      };
    case CollectionActions.UPDATE_PREVIEW_COLLECTION:
      return {
        ...state,
        previewCollection: action.payload
      }
    default:
      return state;
  }
}