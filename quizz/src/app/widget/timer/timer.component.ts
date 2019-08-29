import { Component, OnInit, Input, Output, EventEmitter, NgZone } from '@angular/core';
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

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    this.start();
  }

  start() {
    // start the timer

    // protractor issue (you must run this outside an angular zone)
    this.ngZone.runOutsideAngular(() => {
      interval(1000).pipe(startWith(0), take(this.init + 1), scan(acc => acc - 1, this.init + 1)).subscribe(
        n => {
          // protractor issue (and you must run this in a zone)
          this.ngZone.run(() => {
            this.remaining = n;
            if (n === 0) {
              this.dringdring.emit();
            }
          });

        }
      );
    });
  }
}

