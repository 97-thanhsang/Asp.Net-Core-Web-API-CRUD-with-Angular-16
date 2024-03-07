import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailsFormComponent } from './payment-details/payment-details-form/payment-details-form.component';
import { PaymentDetailsService } from './shared/payment-details.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    PaymentDetailsComponent,
    PaymentDetailsFormComponent,
    HttpClientModule
  ],
  providers:[
    PaymentDetailsService
  ],  
  selector: 'payment-app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'payment-app';
}
