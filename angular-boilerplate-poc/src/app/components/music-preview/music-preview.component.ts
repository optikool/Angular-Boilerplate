import { Component, OnInit, OnDestroy } from '@angular/core';
import { MusicPlayerService } from 'ngx-soundmanager2';
import { Track } from 'src/app/models/track';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';

@Component({
  selector: 'app-music-preview',
  templateUrl: './music-preview.component.html',
  styleUrls: ['./music-preview.component.scss']
})
export class MusicPreviewComponent implements OnInit, OnDestroy {
  private track: Track;
  private subscription: Subscription;
  private locale;
  private isAudioPlaying: string;

  constructor(private store: Store<Track>, private musicPlayerService: MusicPlayerService) {
    this.locale = locale;
    this.isAudioPlaying = 'false';
    this.track = null;
    this.subscription = null;
  }

  ngOnInit() {
    this.track = this.locale.NoAudioSelected;
    this.subscription = this.store.select('trackList')
      .subscribe(
        data => {
          this.track = data.previewTrack ? data.previewTrack : this.locale.NoAudioSelected;
        }
      );
  }

  hasSongs(songs) {
    return songs.length > 0;
  }

  audioPlaying() {
    return this.isAudioPlaying === 'true';
  }

  playTrack() {
    console.log('Playing Track');
    this.isAudioPlaying = 'true';
  }

  pauseTrack() {
    console.log('Pausing Track');
    this.isAudioPlaying = 'false';
  }

  stopTrack() {
    console.log('Stopping Track');
    this.isAudioPlaying = 'false';
  }

  ngOnDestroy() {

  }
}