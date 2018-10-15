import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageAnimationDirective } from './image-animation.directive';

@NgModule({
  declarations: [
    ImageAnimationDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ImageAnimationDirective
  ]
})
export class DirectivesModule {}