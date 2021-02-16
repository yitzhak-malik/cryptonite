import { TestBed } from '@angular/core/testing';

import { ApiCoinsesService } from './api-coinses.service';

describe('ApiCoinsesService', () => {
  let service: ApiCoinsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoinsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
