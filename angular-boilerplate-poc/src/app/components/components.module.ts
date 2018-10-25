import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { MusicItemComponent } from './music-item/music-item.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicPreviewComponent } from './music-preview/music-preview.component';
import { NgbdModalDialog } from './modal/modal.component';
import { PipesModule } from '../pipes/pipes.module';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImagePreviewComponent,
    MusicItemComponent,
    MusicPlayerComponent,
    MusicPreviewComponent,
    NgbdModalDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    NgbModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImagePreviewComponent,
    MusicItemComponent,
    MusicPlayerComponent,
    MusicPreviewComponent,
    NgbdModalDialog
  ]
})
export class ComponentsModule { }

