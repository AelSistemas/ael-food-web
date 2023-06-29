import { TestBed } from '@angular/core/testing';

import { ServiceApiCrudService } from './service-api-crud.service';

describe('ServiceApiCrudService', () => {
  let service: ServiceApiCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApiCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
