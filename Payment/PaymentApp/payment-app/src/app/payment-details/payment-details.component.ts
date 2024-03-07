/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailsService } from '../shared/payment-details.service';

@Component({
  selector: 'payment-app-payment-details',
  standalone: true,
  imports: [CommonModule,PaymentDetailsFormComponent],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service : PaymentDetailsService){

  }
  ngOnInit(): void {
    this.service.refeshList();
  }

}
