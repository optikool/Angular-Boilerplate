import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
// import { MusicPlayerService } from 'ngx-soundmanager2';
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
  track: Track;

  constructor(private store: Store<fromApp.AppState>) {}
  //, private musicPlayerService: MusicPlayerService
  ngOnInit() {
    this.track = {
      "name": "Midnait - Arenas Eps. 9",
      "link": "/assets/music/media/Midnait_09_Midnait_Arenas_Eps_09.mp3",
      "cover": "/assets/music/images/midnait_arenas_eps_9.jpg",
      "description": "Hey all! This is the next episode in my Resto Druid Arena videos. This is a montage of 2v2 Arenas captured in 4K. The music is taken from Beatport and is a melow Trance soundtrack with the following songs...",
      "songs": [
        "Coming home feat. Bo Bruce - Standerwick Extended Mix",
        "Black Coffee - UCast Extended Remix",
        "In The Dark - Extended Mix",
        "Push Through - Extended Mix"
      ],
      "author": "Optikool"
    };
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