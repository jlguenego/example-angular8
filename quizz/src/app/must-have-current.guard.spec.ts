import { TestBed, async, inject } from '@angular/core/testing';

import { MustHaveCurrentGuard } from './must-have-current.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizzService } from './quizz.service';

describe('MustHaveCurrentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [MustHaveCurrentGuard, QuizzService]
    });
  });

  it('should ...', inject([MustHaveCurrentGuard], (guard: MustHaveCurrentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
