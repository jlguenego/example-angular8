import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  current = this.getCurrent();
  constructor() { }

  setCurrent(q: Quizz) {
    this.saveCurrent();
    this.current = q;
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  getCurrent(): Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return null;
    }
    const q = JSON.parse(str);
    // cast from Object to Quizz.
    q.__proto__ = Quizz.prototype;
    return q;
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }
}
