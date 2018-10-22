import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AnswerComponent } from './views/answer/answer.component';
import { MusicComponent } from './views/music/music.component';
import { InstructionsComponent } from './views/instructions/instructions.component';
import { SharedModule } from './shared/shared.module';
import { reducers } from './store/app.reducers';
import { CollectionEffects } from './store/collection/collection.effects';
import { MusicEffects } from './store/music/music.effects';
import { NgbdModalDialog } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnswerComponent,
    MusicComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule,
    DirectivesModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CollectionEffects, MusicEffects])
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent],
  entryComponents: [NgbdModalDialog]
})
export class AppModule { }
