import { Action } from "@ngrx/store";
import { Track } from '../../models/track';

export const FETCH_TRACKS = 'FETCH_TRACKS';
export const ADD_TRACKS = 'ADD_TRACKS';
export const GET_TRACKS = 'GET_TRACKS';
export const GET_TRACK = 'GET_TRACK';
export const UPDATE_PREVIEW_TRACK = 'UPDATE_PREVIEW_TRACK';

export class FetchTracks implements Action {
  readonly type = FETCH_TRACKS;
}

export class AddTracks implements Action {
  readonly type = ADD_TRACKS;

  constructor(public payload: Array<Track>) {};
}

export class GetTracks implements Action {
  readonly type = GET_TRACKS;

  constructor(public payload: Array<Track>) {};
}

export class GetTrack implements Action {
  readonly type = GET_TRACK;

  constructor(public payload: Track) {};
}

export class UpdatePreviewTrack implements Action {
  readonly type = UPDATE_PREVIEW_TRACK;

  constructor(public payload: Track) {};
}

export type MusicActions =
  FetchTracks |
  AddTracks |
  GetTracks |
  GetTrack |
  UpdatePreviewTrack;