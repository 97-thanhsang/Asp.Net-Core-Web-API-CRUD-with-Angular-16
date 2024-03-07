import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaymentDetailsFormComponent } from './payment-details/payment-details-form/payment-details-form.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailsService } from './shared/payment-details.service';
@Component({
  standalone: true,
  imports: [
    RouterModule,
    PaymentDetailsComponent,
    PaymentDetailsFormComponent,
    HttpClientModule,
    FormsModule,
    
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
