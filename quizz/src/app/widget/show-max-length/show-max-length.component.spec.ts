import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMaxLengthComponent } from './show-max-length.component';

describe('ShowMaxLengthComponent', () => {
  let component: ShowMaxLengthComponent;
  let fixture: ComponentFixture<ShowMaxLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMaxLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMaxLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
