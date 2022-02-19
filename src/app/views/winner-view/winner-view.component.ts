import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner-view',
  templateUrl: './winner-view.component.html',
  styleUrls: ['./winner-view.component.css']
})
export class WinnerViewComponent implements OnInit {

  @Input() attempts: number;
  @Input() finalSentence: string[][];
  showQueue = [false, false, false, false, false, false];
  moveDistance = 0;
  revealClicked = false;

  constructor() { }

  ngOnInit(): void {
    // clear away any previous wrong words
    if (this.finalSentence.length !== 6) {
      this.finalSentence = this.finalSentence.slice(this.finalSentence.length - 6);
    }
  }

  onReveal() {
    this.revealClicked = true;
    for (let i=0; i<this.showQueue.length; i++) {
      setTimeout(() => {this.showQueue[i] = true; }, i * 500);
    }
    setTimeout(() =>{
      const dotsDiv = document.getElementById("dots");
      this.moveDistance = dotsDiv!.clientHeight + 7;
    }, 3000);
  }

}
