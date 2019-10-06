import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizzCreateModule } from '../quizz-create.module';
import { Quizz } from 'src/app/quizz';
import { QuizzService } from 'src/app/quizz.service';
import { CustomValidators } from 'projects/widget/src/public-api';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.maxLength(40)])
  });

  constructor(private router: Router, private quizz: QuizzService) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    const q = new Quizz();
    q.name = this.f.value.name;
    this.quizz.setCurrent(q);
    this.router.navigateByUrl('/setup');
  }

}
