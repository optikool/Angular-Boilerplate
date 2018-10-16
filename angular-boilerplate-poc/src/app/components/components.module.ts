import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PreviewComponent } from './preview/preview.component';
import { NgbdModalDialog } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    NgbdModalDialog
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PreviewComponent,
    NgbdModalDialog
  ]
})
export class ComponentsModule { }
