import { Action } from "@ngrx/store";
import { Collection } from "../models/collection";

export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const ADD_COLLECTIONS = 'ADD_COLLECTIONS';
export const ADD_COLLECTION = 'ADD_COLLECTION';
export const GET_RANDOM_COLLECTION = 'GET_RANDOM_COLLECTION';
export const SET_RANDOM_COLLECTION = 'SET_RANDOM_COLLECTION';

export class FetchCollections implements Action {
  readonly type = FETCH_COLLECTIONS;
}

export class GetCollections implements Action {
  readonly type = GET_COLLECTIONS;

  // Retrieve and array of data
  payload: Array<Collection>;
}

export class AddCollection implements Action {
  readonly type = ADD_COLLECTION;

  // Needed to pass data and add to collection property
  constructor(public payload: Collection) {}
}

export class AddCollections implements Action {
  readonly type = ADD_COLLECTIONS;

  constructor(public payload: Collection[]) {}
}

export class GetRandomeCollection implements Action {
  readonly type = GET_RANDOM_COLLECTION;

  // Retrieve a single data object
  payload: Collection
}

export class SetRandomeCollection implements Action {
  readonly type = SET_RANDOM_COLLECTION;

  // Needed to pass data and return random collection
  constructor(public payload: Collection) {}
}

export type CollectionActions = 
  GetCollections | 
  GetRandomeCollection | 
  SetRandomeCollection | 
  AddCollection |
  AddCollections;