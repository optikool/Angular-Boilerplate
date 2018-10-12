import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { CommonNavModule } from './components/common-nav.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AnswerComponent } from './views/answer/answer.component';
import { InstructionsComponent } from './views/instructions/instructions.component';
import { SharedModule } from './shared/shared.module';
import { reducers } from './store/app.reducers';
import { CollectionEffects } from './store/collection.effects';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnswerComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonNavModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CollectionEffects])
  ],
  providers: [NgbModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
