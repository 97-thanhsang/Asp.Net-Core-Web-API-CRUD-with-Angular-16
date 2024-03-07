/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { FormsModule, NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-details.model';

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

  onSubmit(form : NgForm)
  {
    this.service.postPaymentDetail()
    .subscribe({
      next : res => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
