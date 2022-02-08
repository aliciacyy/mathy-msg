import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.css']
})
export class StartViewComponent implements OnInit {

  @Output() changeView = new EventEmitter<string>();

  constructor() {
   }

  ngOnInit(): void {
  }

  onReady() {
    this.changeView.emit('gameView');
  }

}
