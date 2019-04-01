import { TestBed } from '@angular/core/testing';

import { UbicacionProviderService } from './ubicacion-provider.service';

describe('UbicacionProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UbicacionProviderService = TestBed.get(UbicacionProviderService);
    expect(service).toBeTruthy();
  });
});
