import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentDetailsFormComponent } from './payment-details-form.component';

describe('PaymentDetailsFormComponent', () => {
  let component: PaymentDetailsFormComponent;
  let fixture: ComponentFixture<PaymentDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDetailsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
