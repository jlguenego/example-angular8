import { AutofocusDirective } from './autofocus.directive';
import { Component, DebugElement, OnInit } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <div class="toto"></div>
  <input widgetAutofocus (focus)="focus()">`
})
class TestComponent implements OnInit {
  isFocused = false;
  ngOnInit(): void {
    // console.log('Test NgOnInit');
  }
  focus() {
    // console.log('hey, I am focused');
    this.isFocused = true;
  }
}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directiveElt = fixture.debugElement.query(By.directive(AutofocusDirective));
    console.log('directiveElt', directiveElt);
    expect(directiveElt).toBeTruthy();
    expect(component.isFocused).toBe(true);
  });

});
