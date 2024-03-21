import { TestBed } from '@angular/core/testing';

import { IntercecptorService } from './intercecptor.service';

describe('IntercecptorService', () => {
  let service: IntercecptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntercecptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
