import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'payment-app-payment-details-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css',
})
export class PaymentDetailsFormComponent {

  constructor(public service : PaymentDetailsService){

  }

}
