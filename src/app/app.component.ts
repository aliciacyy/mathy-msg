import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as yaml from 'js-yaml';
import { LetterObj } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mathy-msg';
  displayType = 'startView';
  gameOverMsg = '';
  lettersMap: {
    [key: string]: any,
   } = {};
  constructor(private httpClient: HttpClient) { 
  }

  ngOnInit() {
    (<any>$(document)).foundation();
    this.httpClient.get('assets/yaml/questions.yml', {responseType: 'text'})
    .subscribe(data => {
      const doc = yaml.load(data);
      (doc as LetterObj[]).map((element: LetterObj) => {
        this.lettersMap[element.letter] = {
          'letter': element.letter,
          'number': element.number,
          'questions': element.questions.map((q: string) => ({'question': q, 'attempt': 0}))
        }
        this.lettersMap['attemptNumber'] = -1;
      });
    });
  }

  onChangeView($event: string) {
    this.displayType = $event;
  }
  
  setGameOverMsg($event: string) {
    this.gameOverMsg = $event;
  }
}
