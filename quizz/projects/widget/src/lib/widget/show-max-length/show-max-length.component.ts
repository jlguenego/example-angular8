import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'widget-show-max-length',
  templateUrl: './show-max-length.component.html',
  styleUrls: ['./show-max-length.component.scss']
})
export class ShowMaxLengthComponent implements OnInit {

  @Input() fg: FormGroup;
  @Input() fcn: string;
  @Input() max: number;

  constructor() { }

  ngOnInit() {
  }

}
