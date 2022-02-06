import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mathy-msg';
  displayType = 'startView';

  ngOnInit() {
    (<any>$(document)).foundation();
  }

  onChangeView($event: string) {
    this.displayType = $event;
  }
}
