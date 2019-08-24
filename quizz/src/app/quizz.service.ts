import { Injectable } from '@angular/core';
import { Quizz } from './quizz';
import { Question } from './question';

interface QuizzStore {
  [key: string]: Quizz;
}

interface QuizzProgress {
  score: number;
  questionId: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();
  quizzStore = this.getQuizzStore();
  progress = this.getProgress();

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

  getList(): Quizz[] {
    return Object.values(this.quizzStore)
      .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
  }

  start(q: Quizz) {
    this.setCurrent(q);
    this.setProgress({
      score: 0,
      questionId: 0
    });

  }

  setProgress(p: QuizzProgress) {
    this.saveProgress(p);
    this.progress = p;
  }

  saveProgress(p: QuizzProgress) {
    localStorage.setItem('progress', JSON.stringify(p));
  }

  getProgress(): QuizzProgress {
    const str = localStorage.getItem('progress');
    if (!str) {
      return null;
    }
    const p = JSON.parse(str);
    // no need to cast because it is an interface.
    return p;
  }
}
