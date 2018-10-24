import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { MusicPlayerService } from 'ngx-soundmanager2';
import { locale } from '../../constants/locale.constant';
import * as fromApp from '../../store/app.reducers';
import * as MusicActions from '../../store/music/music.actions';
import { Track } from '../../models/track';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss'],
})
export class MusicComponent implements OnInit, OnDestroy, AfterViewInit {
  soundtracks: Array<Track>;
  subscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.store.dispatch(new MusicActions.FetchTracks());
    this.subscription = this.store.select('trackList')
      .pipe(delay(0))
      .subscribe(
        data => {
          this.soundtracks = data.soundtracks;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}