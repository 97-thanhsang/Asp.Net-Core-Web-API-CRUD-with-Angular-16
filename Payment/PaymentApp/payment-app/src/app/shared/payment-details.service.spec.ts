import { TestBed } from '@angular/core/testing';

import { PaymentDetailsService } from './payment-details.service';

describe('PaymentDetailsService', () => {
  let service: PaymentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
