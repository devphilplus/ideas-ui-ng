import { TestBed } from '@angular/core/testing';

import { AnonymousGuard } from './anonymous.guard';

describe('AnonymousGuard', () => {
  let guard: AnonymousGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnonymousGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
