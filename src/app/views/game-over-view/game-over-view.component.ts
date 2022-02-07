import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-over-view',
  templateUrl: './game-over-view.component.html',
  styleUrls: ['./game-over-view.component.css']
})
export class GameOverViewComponent implements OnInit {

  @Input() gameOverType = '';
  gameOverMessage = '';
  @Output() changeView = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    // set game over message
    switch (this.gameOverType) {
      case 'wrong':
        this.gameOverMessage = 'You selected the wrong answer!';
        break;
      case 'time':
        this.gameOverMessage = 'You ran out of time!';
        break;
    }
  }

  onRetry() {
    this.changeView.emit('gameView');
  }

}
