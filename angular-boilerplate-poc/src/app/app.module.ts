import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CommonNavModule } from './components/common-nav.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AnswerComponent } from './views/answer/answer.component';
import { InstructionsComponent } from './views/instructions/instructions.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnswerComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    CommonNavModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
