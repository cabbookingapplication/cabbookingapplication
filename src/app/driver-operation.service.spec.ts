import { TestBed } from '@angular/core/testing';

import { DriverOperationService } from './driver-operation.service';

describe('DriverOperationService', () => {
  let service: DriverOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
