import { Component, OnInit, Input } from '@angular/core';
import { AbstractValueAccessor, MakeProvider } from '../abstract-value-accessor';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  providers: [MakeProvider(RadioInputComponent)],
})
export class RadioInputComponent extends AbstractValueAccessor implements OnInit {

  @Input() returnedValue: string;

  isSelected = false;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
