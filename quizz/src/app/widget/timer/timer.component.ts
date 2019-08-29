import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { take, startWith, scan } from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Input() init = 120;
  remaining: number;
  @Output() dringdring = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.start();
  }

  start() {
    // start the timer
    interval(1000).pipe(startWith(0), take(this.init + 1), scan(acc => acc - 1, this.init + 1)).subscribe(
      n => {
        this.remaining = n;
        if (n === 0) {
          this.dringdring.emit();
        }
      }
    );
  }

}
