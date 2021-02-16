import { TestBed } from '@angular/core/testing';

import { ListLiveReportsService } from './list-live-reports.service';

describe('ListLiveReportsService', () => {
  let service: ListLiveReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListLiveReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
