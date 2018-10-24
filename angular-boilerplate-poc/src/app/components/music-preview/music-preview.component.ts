import { Component, OnInit, OnDestroy } from '@angular/core';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-music-preview',
  templateUrl: './music-preview.component.html',
  styleUrls: ['./music-preview.component.scss']
})
export class MusicPreviewComponent implements OnInit, OnDestroy {
  private track: Track;
  constructor() {

  }

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

  hasSongs(songs) {
    return songs.length > 0;
  }

  ngOnDestroy() {
    
  }
}