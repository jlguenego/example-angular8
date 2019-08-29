import { Component, OnInit, ElementRef, ContentChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RadioInputComponent implements OnInit {

  isSelected = false;

  constructor() {
  }

  ngOnInit() {
  }

  click() {
    console.log('click');
    this.isSelected = true;
  }

  change() {
    console.log('change');
  }

}
