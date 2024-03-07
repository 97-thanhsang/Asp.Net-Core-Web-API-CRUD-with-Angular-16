import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PaymentDetailsFormComponent } from './payment-details/payment-details-form/payment-details-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailsService } from './shared/payment-details.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: 
      [
        AppComponent, 
        PaymentDetailsComponent,
        PaymentDetailsFormComponent,
        RouterTestingModule,
        HttpClientModule,
        FormsModule,       
      ],
      providers:
      [
        PaymentDetailsService
      ]
    }).compileComponents();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome payment-app'
    );
  });

  it(`should have as title 'payment-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('payment-app');
  });
});
