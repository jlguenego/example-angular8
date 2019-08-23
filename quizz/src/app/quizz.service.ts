import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() { }

  setCurrent(q: Quizz) {
    localStorage.setItem('current', JSON.stringify(q));
  }
}
