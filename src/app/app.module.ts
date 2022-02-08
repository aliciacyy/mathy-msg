import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StartViewComponent } from './views/start-view/start-view.component';
import { AnswerTileComponent } from './components/answer-tile/answer-tile.component';
import { GameViewComponent } from './views/game-view/game-view.component';
import { GameOverViewComponent } from './views/game-over-view/game-over-view.component';
import { WinnerViewComponent } from './views/winner-view/winner-view.component';

@NgModule({
  declarations: [
    AppComponent,
    StartViewComponent,
    AnswerTileComponent,
    GameViewComponent,
    GameOverViewComponent,
    WinnerViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
