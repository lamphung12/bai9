import { TestBed } from '@angular/core/testing';

import { ProductBeService } from './product-be.service';

describe('ProductBeService', () => {
  let service: ProductBeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
