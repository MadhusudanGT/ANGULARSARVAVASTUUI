import { TestBed } from '@angular/core/testing';

import { WishlistmessengerService } from './wishlistmessenger.service';

describe('WishlistmessengerService', () => {
  let service: WishlistmessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistmessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
