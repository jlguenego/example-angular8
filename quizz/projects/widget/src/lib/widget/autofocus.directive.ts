import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[widgetAutofocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private elt: ElementRef) {
    console.log('start directive');
  }

  ngOnInit(): void {
    this.elt.nativeElement.focus();
  }

}
