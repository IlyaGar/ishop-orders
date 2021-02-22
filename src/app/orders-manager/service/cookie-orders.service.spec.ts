import { TestBed } from '@angular/core/testing';

import { CookieOrdersService } from './cookie-orders.service';

describe('CookieOrdersService', () => {
  let service: CookieOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
