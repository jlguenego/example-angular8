import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';

interface QuizzStore {
  [key: string]: Quizz;
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();
  quizzStore = this.getQuizzStore();

  constructor() { }

  setCurrent(q: Quizz) {
    this.saveCurrent();
    this.current = q;
  }

  saveCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  saveQuizzStore() {
    localStorage.setItem('quizzStore', JSON.stringify(this.quizzStore));
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

  getQuizzStore(): QuizzStore {
    const str = localStorage.getItem('quizzStore');
    if (!str) {
      return {};
    }
    const quizzStore = JSON.parse(str);
    // cast from quizzStore to Quizz.
    // tslint:disable-next-line: forin
    for (const p in quizzStore) {
      quizzStore[p].__proto__ = Quizz.prototype;
    }
    return quizzStore;
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.saveCurrent();
  }

  saveCurrentToQuizzStore() {
    this.quizzStore[this.current.name] = this.current;
    this.saveQuizzStore();
  }

  isQuizzStoreEmpty() {
    return Object.keys(this.quizzStore).length === 0;
  }
}
