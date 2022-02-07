import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mathy-msg';
  displayType = 'startView';
  gameOverMsg = '';

  ngOnInit() {
    (<any>$(document)).foundation();
  }

  onChangeView($event: string) {
    this.displayType = $event;
  }
  
  setGameOverMsg($event: string) {
    this.gameOverMsg = $event;
  }
}
