import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit, OnDestroy {

  @Output() changeView = new EventEmitter<string>();
  @Output() gameOverMsg = new EventEmitter<string>();
  countdownNumberEl: HTMLElement | null;
  interval: any;
  countdown = 10;
  question = '(4 + 7) * 2';
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  constructor() { 
    this.countdownNumberEl = document.getElementById('countdown-number');
  }

  ngOnInit(): void {
    this.countdownNumberEl = document.getElementById('countdown-number');
    this.countdownNumberEl!.textContent = String(this.countdown);
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      this.countdown = --this.countdown;
      this.countdownNumberEl!.textContent = String(this.countdown);
      if (this.countdown === 0) {
        this.gameOverMsg.emit('time');
        this.changeView.emit('gameOverView');
      }
    }, 1000);
  }

  onAnswerClick(letter: string) {
    this.gameOverMsg.emit('wrong');
    this.changeView.emit('gameOverView');
  }

}
