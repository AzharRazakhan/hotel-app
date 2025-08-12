import { TestBed } from '@angular/core/testing';

import { ReserationServiceService } from './reseration-service.service';

describe('ReserationServiceService', () => {
  let service: ReserationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
