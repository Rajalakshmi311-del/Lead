import { TestBed } from '@angular/core/testing';

import { LeadserviceService } from './leadservice.service';

describe('LeadserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeadserviceService = TestBed.get(LeadserviceService);
    expect(service).toBeTruthy();
  });
});
