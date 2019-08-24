import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }

  start(q: Quizz) {
    this.quizz.start(q);
    this.router.navigateByUrl('/question/1');
  }

}
