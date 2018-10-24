import * as MusicActions from './music.actions';
import { Track } from '../../models/track';

export interface State {
  soundtracks: Array<Track>;
  currentTrack: Track;
  previewTrack: Track;
}

const initialState: State = {
  soundtracks: [],
  currentTrack: null,
  previewTrack: null
};

export function trackListReducer(state = initialState, action: MusicActions.MusicActions) {
  switch (action.type) {
    case MusicActions.GET_TRACKS:
      return {
        ...state
      };
    case MusicActions.ADD_TRACKS:
      return {
        ...state,
        soundtracks: action.payload
      };
    case MusicActions.GET_TRACK:
      return {
        ...state,
        currentTrack: state.soundtracks[0]
      };
    case MusicActions.UPDATE_PREVIEW_TRACK:
      return {
        ...state,
        previewTrack: action.payload
      };
    default:
      return state;
  }
}