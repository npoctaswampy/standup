import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Trivia } from '../model/trivia.model';
import { TriviaApiService } from '../service/trivia-api.service';
import { shuffleArray } from '../util/array-function.util';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {

  showAnswer=false;
  triviaQuestion: Observable<Trivia> = of();
  constructor(private triviaService: TriviaApiService) { }

  ngOnInit(): void {
    this.triviaQuestion = this.triviaService.getTrivia().pipe(map(tr => {
      const res = tr.results[0];
      const mixedAns = this.mixAnswers(res);
      return {...res, mixed_answers: mixedAns};
    }))
  }

getRealQuotes(s: string) {
  return s.replace(new RegExp('&quot;', 'g'), '"').replace(new RegExp('&#039;', 'g'), "'");
}

mixAnswers(trivia: Trivia) {
  var answers = [];
  answers.push(trivia.correct_answer);
  trivia.incorrect_answers.forEach(ans => answers.push(ans));
  return shuffleArray(answers);
}

showAnswerToggle() {
  this.showAnswer = true;
}

}
