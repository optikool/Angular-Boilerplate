import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as fromApp from '../../store/app.reducers';
import * as MusicActions from '../../store/music/music.actions';
import { Store } from '@ngrx/store';
import { Track } from '../../models/track';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit, OnDestroy {
  @Input() track: Track;

  constructor(private store: Store<fromApp.AppState>) {
    // https://github.com/lfarran/ngx-soundmanager2#readme
  }

  ngOnInit() {

  }

  loadSoundTrack(track) {
    this.store.dispatch(new MusicActions.UpdatePreviewTrack(track));
  }

  ngOnDestroy() {

  }
}