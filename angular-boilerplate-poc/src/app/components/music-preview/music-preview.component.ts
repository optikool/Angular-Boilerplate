import { Component, OnInit, OnDestroy } from '@angular/core';
import { Track } from 'src/app/models/track';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { locale } from '../../constants/locale.constant';

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
  private isAudioPlaying: string;
  private song;

  currentPlaying: any;

  currentTrackPostion: number;
  currentTrackDuration: number;
  currentTrackProgress: number;
  volume: number;

  // subscriptions
  private musicPlayerTrackIdSubscription: any;

  constructor(private store: Store<Track>) {
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
          console.log('track: ', this.track);
        }
      );

      // this.currentPlaying = this.musicPlayerService.currentTrackData();
      // this.musicPlayerTrackIdSubscription = this.musicPlayerService.musicPlayerTrackEventEmitter
      //   .subscribe((event: any) => {
      //     this.currentPlaying = this.musicPlayerService.currentTrackData();
      //     this.currentTrackPostion = event.data.trackPosition;
      //     this.currentTrackDuration = event.data.trackDuration;
      //     this.currentTrackProgress = event.data.trackProgress;
      //   });

      this.song = [{
        id: 'one',
        title: 'Kick It',
        artist: 'Raised On Zenith',
        url: 'https://popplers5.bandcamp.com/download/track?enc=mp3-128&fsig=10442536bc89f9881e8da2eb81ecd5fb&id=120877506&stream=1&ts=1502502685.0'
      }];
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

  // get progress(): string {
  //   return this.currentTrackProgress ? (this.currentTrackProgress.toString() + '%') : '0%';
  // }

  ngOnDestroy() {
    this.musicPlayerTrackIdSubscription.unsubscribe();
  }
}