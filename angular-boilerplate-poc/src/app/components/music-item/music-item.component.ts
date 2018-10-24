import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MusicPlayerService } from 'ngx-soundmanager2';
import { Track } from 'src/app/models/track';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss']
})
export class MusicItemComponent implements OnInit, OnDestroy {
  @Input() track: Track;

  constructor(private musicPlayerService: MusicPlayerService) {
    // https://github.com/lfarran/ngx-soundmanager2#readme
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    
  }
}