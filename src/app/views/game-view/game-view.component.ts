import { Component, EventEmitter, OnDestroy, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})

export class GameViewComponent implements OnInit, OnDestroy {

  @Output() changeView = new EventEmitter<string>();
  @Output() gameOverMsg = new EventEmitter<string>();
  @Input() lettersMap: {
    [key: string]: any,
   } = {};
  countdownNumberEl: HTMLElement | null;
  dotEls: HTMLCollectionOf<any>;
  interval: any;
  countdown = 10;
  showCircle = true;
  question = '';
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

   sentence: string[][] = [
     ['H','A','P','P','Y'],
     ['E', 'I', 'G', 'H', 'T', 'H'], 
     ['V', 'A', 'L', 'E', 'N', 'T', 'I', 'N', 'E', 'S'],
     ['D', 'A', 'Y'], ['T', 'O'], ['H', 'U', 'N', 'N', 'Y']
   ];
   wordIndex = 0;
   letterIndex = 0;
   currentLetterSequence: number[] = [];
   dotIndex = 0;

   readonly LAST_WORD_INDEX = 6;
   currentAnswer: string;
  
  constructor() { 
  }

  ngOnInit(): void {
    this.getWord();
    this.getQuestion();
    this.countdownNumberEl = document.getElementById('countdown-number');
    this.countdownNumberEl!.textContent = String(this.countdown);
    this.startTimer();
  }

  ngAfterViewInit() {
    this.dotEls = document.getElementsByClassName('dot');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  shuffle(indexArray: number[]) {
    let currentIndex = indexArray.length,  randomIndex;
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [indexArray[currentIndex], indexArray[randomIndex]] = [
        indexArray[randomIndex], indexArray[currentIndex]];
    }
    return indexArray;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  getWord() {
    let word = this.sentence[this.wordIndex];
    let letterIndexes = [];
    for (let i=0; i<word.length; i++) {
      letterIndexes.push(i);
    }
    this.currentLetterSequence = this.shuffle(letterIndexes);
  }

  getQuestion() {
    if (this.currentLetterSequence.length > 0) {
      this.currentAnswer = this.sentence[this.wordIndex][this.currentLetterSequence.pop() as number];
      let questionSize = this.lettersMap[this.currentAnswer].questions.length;
      this.question = this.lettersMap[this.currentAnswer].questions[this.getRandomInt(questionSize)];
      // if no more letter after this, move to the next word index
      if (this.currentLetterSequence.length === 0) {
        this.wordIndex++;
        if (this.wordIndex !== this.LAST_WORD_INDEX) {
          this.getWord();
        } 
      }
    }
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
    if (letter === this.currentAnswer) {
      this.dotEls[this.dotIndex].classList.add('correct');
      this.dotEls[this.dotIndex].textContent = letter;
      this.dotIndex++;
      // if no more question
      if (this.wordIndex === this.LAST_WORD_INDEX && this.currentLetterSequence.length === 0) {
        this.changeView.emit('winnerView');
      } else {
        this.getQuestion();
        clearInterval(this.interval);
        this.countdown = 10;
        this.countdownNumberEl!.textContent = String(this.countdown);
        this.startTimer();
      }
    } else {
      this.gameOverMsg.emit('wrong');
      this.changeView.emit('gameOverView');
    }
  }

}