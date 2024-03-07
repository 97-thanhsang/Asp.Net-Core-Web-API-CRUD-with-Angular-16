/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-details.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  url: string = environment.apiBaseUrl + '/PaymentDetail';
  list:PaymentDetail[] = [];
  formData : PaymentDetail = new PaymentDetail();
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
}
