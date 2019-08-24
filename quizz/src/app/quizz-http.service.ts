import { Injectable } from '@angular/core';
import { QuizzService, QuizzStore } from './quizz.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    console.log('http service');
    this.httpGetQuizzStore();
  }

  httpGetQuizzStore() {
    this.http.get<QuizzStore>('http://localhost:8000/ws/quizz')
      .subscribe(qs => {
        this.quizzStore = qs;
        this.saveQuizzStore();
      });
  }
}
