/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDetailsFormComponent } from './payment-details-form/payment-details-form.component';
import { PaymentDetailsService } from '../shared/payment-details.service';
import { PaymentDetail } from '../shared/payment-details.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'payment-app-payment-details',
  standalone: true,
  imports: [CommonModule,PaymentDetailsFormComponent],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.css',
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    public service : PaymentDetailsService,
    private toastr : ToastrService){

  }
  ngOnInit(): void {
    this.service.refeshList();
  }
  populateForm(selectedRecord : PaymentDetail)
  {
    this.service.formData = Object.assign({},selectedRecord);
  }
  onDelete(id : number)
  {
    if (confirm('Are you sure ?')) {
      this.service.deletePaymentDetail(id)
      .subscribe({
        next : res => {
          this.service.list = res as PaymentDetail[];
          this.toastr.error('Deleted Successfully','Payment Detail Register')
        },
        error : err => {
          console.log(err);
        }
      })
    }

  }

}
