import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();
  constructor() { }

  setCurrent(q: Quizz) {
    localStorage.setItem('current', JSON.stringify(q));
    this.current = q;
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
}
