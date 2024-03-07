/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-details.model';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';

@Component({
  selector: 'payment-app-payment-details-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment-details-form.component.html',
  styleUrl: './payment-details-form.component.css',
})
export class PaymentDetailsFormComponent {

  constructor(
    public service : PaymentDetailsService,
    private toastr : ToastrService
    ){

  }

  onSubmit(form : NgForm)
  {
    this.service.formSubmitted = true;
    if (form.valid) {
      if(this.service.formData.paymentDetailID == 0)
      {
        this.insertRecord(form);
      }
      else
      {
        this.updateRecord(form);
      }
    }

  }

  insertRecord(form : NgForm)
  {
    this.service.postPaymentDetail()
    .subscribe({
      next : res => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        this.toastr.success('Insert Successfully','Payment Detail Register')
      },
      error : err => {
        console.log(err);
      }
    })
  }
  updateRecord(form : NgForm)
  {
    this.service.putPaymentDetail()
    .subscribe({
      next : res => {
        this.service.list = res as PaymentDetail[];
        this.service.resetForm(form);
        this.toastr.info('Update Successfully','Payment Detail Register')
      },
      error : err => {
        console.log(err);
      }
    })
  }

}
