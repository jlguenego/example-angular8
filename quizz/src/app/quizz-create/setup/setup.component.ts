import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(public quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }

  finish() {
    console.log('finish');
    this.quizz.saveCurrentToQuizzStore();
    this.router.navigate(['/']);
  }

}
