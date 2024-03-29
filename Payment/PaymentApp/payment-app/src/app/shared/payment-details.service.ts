/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-details.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list:PaymentDetail[] = [];
  formData : PaymentDetail = new PaymentDetail();
  formSubmitted : boolean = false;
  constructor(private http: HttpClient) { }
  refeshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
        this.list = res as PaymentDetail[];
          console.log(res);
        },
        error: err => {
          console.log(err)
        }
      })
  }
  postPaymentDetail()
  {
    return this.http.post(this.url,this.formData)
  }
  putPaymentDetail()
  {
    return this.http.put(this.url + '/' + this.formData.paymentDetailID ,this.formData)
  }
  deletePaymentDetail(id : number)
  {
    return this.http.delete(this.url + '/' + id)
  }

  resetForm(form : NgForm)
  {
    form.form.reset();
    this.formData = new PaymentDetail();
    this.formSubmitted = false;
  }
}
