import { TestBed, async, inject } from '@angular/core/testing';

import { MustHaveCurrentGuard } from './must-have-current.guard';

describe('MustHaveCurrentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MustHaveCurrentGuard]
    });
  });

  it('should ...', inject([MustHaveCurrentGuard], (guard: MustHaveCurrentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
