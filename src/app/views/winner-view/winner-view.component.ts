import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-winner-view',
  templateUrl: './winner-view.component.html',
  styleUrls: ['./winner-view.component.css']
})
export class WinnerViewComponent implements OnInit {

  @Input() attempts: number;
  showQueue = [false, false, false, false, false, false];

  constructor() { }

  ngOnInit(): void {
  }

  onReveal() {
    for (let i=0; i<this.showQueue.length; i++) {
      setTimeout(() => {this.showQueue[i] = true; }, i * 500);
    }
  }

}
