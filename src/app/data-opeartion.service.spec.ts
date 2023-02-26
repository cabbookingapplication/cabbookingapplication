import { TestBed } from '@angular/core/testing';

import { DataOpeartionService } from './data-opeartion.service';

describe('DataOpeartionService', () => {
  let service: DataOpeartionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOpeartionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
