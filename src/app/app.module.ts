import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartViewComponent } from './views/start-view/start-view.component';
import { AnswerTileComponent } from './components/answer-tile/answer-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    StartViewComponent,
    AnswerTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
