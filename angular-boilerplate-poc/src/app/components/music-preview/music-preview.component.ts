import { Component, OnInit, OnDestroy } from '@angular/core';
import { Track } from 'src/app/models/track';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';
import { VgAPI } from 'videogular2/core';

declare const WaveSurfer;

@Component({
  selector: 'app-music-preview',
  templateUrl: './music-preview.component.html',
  styleUrls: ['./music-preview.component.scss'],
  providers: []
})
export class MusicPreviewComponent implements OnInit, OnDestroy {
  private track: Track;
  private subscription: Subscription;
  private locale;
  private api: VgAPI;
  private playingSubscription: Subscription;

  currentPlaying: any;

  currentTrackPostion: number;
  currentTrackDuration: number;
  currentTrackProgress: number;
  volume: number;
  wavesurfer;

  constructor(private store: Store<Track>) {
    this.locale = locale;
    this.track = null;
    this.subscription = null;
  }

  ngOnInit() {
    this.track = this.locale.NoAudioSelected;
    this.subscription = this.store.select('trackList')
      .subscribe(
        data => {
          this.track = data.previewTrack ? data.previewTrack : this.locale.NoAudioSelected;
          console.log('track: ', this.track);
        }
      );
  }

  hasSongs(songs) {
    return songs.length > 0;
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
    console.log('Player is ready');
    this.loadSubscriptions();
  }

  loadSubscriptions() {
    this.playingSubscription = this.api.getDefaultMedia().subscriptions.playing
      .subscribe(() => {
        console.log('Now playing');
      });

      this.api.getDefaultMedia().subscriptions.loadStart
      .subscribe(() => {
        console.log('Track started loading');
      });

      this.api.getDefaultMedia().subscriptions.loadedData
      .subscribe(() => {
        console.log('Track has been loaded');
        // this.wavesurfer = WaveSurfer.create({
        //   container: '#waveform',
        //   waveColr: 'grey',
        //   progressColor: 'purple',
        //   scrollParent: true
        // });
    
        // this.wavesurfer.load(this.track.link);
        // this.wavesurfer.play();
      });

      this.api.getDefaultMedia().subscriptions.progress
      .subscribe(() => {
        console.log('Current Track progress: ', this.api.getDefaultMedia().currentTime);
      });

      this.api.getDefaultMedia().subscriptions.ended
      .subscribe(() => {
        console.log('Current Track ended');
      });
  }

  ngOnDestroy() {
    this.playingSubscription.unsubscribe();
  }
}