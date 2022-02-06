import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-tile',
  templateUrl: './answer-tile.component.html',
  styleUrls: ['./answer-tile.component.css']
})
export class AnswerTileComponent implements OnInit {

  @Input() alphabet = 'A';
  @Input() number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
