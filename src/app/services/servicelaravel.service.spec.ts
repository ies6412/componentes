import { TestBed } from '@angular/core/testing';

import { ServicelaravelService } from './servicelaravel.service';

describe('ServicelaravelService', () => {
  let service: ServicelaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicelaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
