import { TestBed } from '@angular/core/testing';

import { GenericAsyncService } from './generic-async.service';

describe('GenericAsyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericAsyncService = TestBed.get(GenericAsyncService);
    expect(service).toBeTruthy();
  });
});
