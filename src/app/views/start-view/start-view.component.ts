import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {

  @Output() changeView = new EventEmitter<string>();
  countdownNumberEl: HTMLElement | null;

  constructor() {
    this.countdownNumberEl = document.getElementById('countdown-number');
   }

  ngOnInit(): void {
    this.countdownNumberEl = document.getElementById('countdown-number');
    this.countdownNumberEl!.textContent = '10';
  }

  onReady() {
    this.changeView.emit('gameView');
  }

}
