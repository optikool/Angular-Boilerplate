import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageAnimationDirective } from './image-animation.directive';
import { DescriptionAnimationDirective } from './description-animation.directive';

@NgModule({
  declarations: [
    ImageAnimationDirective,
    DescriptionAnimationDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    ImageAnimationDirective,
    DescriptionAnimationDirective
  ]
})
export class DirectivesModule {}