import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartViewComponent } from './views/start-view/start-view.component';
import { AnswerTileComponent } from './components/answer-tile/answer-tile.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { GameOverViewComponent } from './views/game-over-view/game-over-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StartViewComponent,
    AnswerTileComponent,
    GameViewComponent,
    GameOverViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
