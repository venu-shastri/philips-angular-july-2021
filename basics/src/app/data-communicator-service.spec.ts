import { TestBed } from '@angular/core/testing';

import { DataCommunicatorService } from './data-communicator-.service';

describe('DataCommunicatorServiceService', () => {
  let service: DataCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
